const db = require('../db/connect')

class Song{
    constructor({song_name, artist, release_year, genre, description, danceability, energy}){
        this.song_name = song_name
        this.artist = artist
        this.release_year = release_year
        this.genre = genre
        this.description = description
        this.danceability = danceability
        this.energy = energy
    }

    static async getAll(){
        const response = await db.query("SELECT song_name FROM songs;")
        if(response.rows.length === 0){
            throw Error("no songs available")
        } else {
            return response.rows.map(song => new Song(song))
        }
    }

    static async getSongByName(song){
        const response = await db.query("SELECT * FROM songs WHERE LOWER(song_name) = LOWER($1);", [song])
        if(response.rows.length !== 1){
            throw Error("Unable to obtain song")
        } else {
            return new Song(response.rows[0])
        }

    }

    static async getSongsByGenre(genre){
        const sqlGenre = "%" + genre + "%"
        const response = await db.query("SELECT * FROM songs WHERE LOWER(genre) LIKE LOWER($1);", [sqlGenre])
        if(response.rows.length === 0){
            throw Error("Unable to obtain songs")
        } else {
            return response.rows.map(song => new Song(song))
        }

    }

    static async getSongsByDecade(release_year){
        const decade = release_year.slice(0,-1)
        const sqlDecade = decade + "%"

        console.log(typeof(decade))
        const response = await db.query("SELECT * FROM songs WHERE CAST(release_year AS varchar) LIKE $1;", [sqlDecade])
        if(response.rows.length === 0){
            throw Error("Unable to obtain songs")
        } else {
            return response.rows.map(song => new Song(song))
        }
    }

    static async getSongsByDanceability(danceability){
        const intDanceability = parseInt(danceability)
        const response = await db.query("SELECT * FROM songs WHERE danceability > ($1 - 5) AND danceability < ($1 + 5);", [intDanceability])
        if(response.rows.length === 0){
            throw Error("Unable to obtain songs")
        } else {
            return response.rows.map(song => new Song(song))
        }
    }

    static async getSongsByEnergy(energy){
        const intEnergy = parseInt(energy)
        const response = await db.query("SELECT * FROM songs WHERE energy > ($1 - 5) AND energy < ($1 + 5);", [intEnergy])
        if(response.rows.length === 0){
            throw Error("Unable to obtain songs")
        } else {
            return response.rows.map(song => new Song(song))
        }
    }

    static async create(data){
        const {song_name, artist, release_year, genre, description} = data
        const existingSong = await db.query("SELECT song_name FROM songs WHERE LOWER(song_name) = LOWER($1)", [song_name])
        
        if(existingSong.rows.length === 0){
            let response = await db.query("INSERT INTO songs (song_name, artist, release_year, genre, description) VALUES ($1, $2, $3, $4, $5);", [song_name, artist, release_year, genre, description])
            return new Song(response.rows[0])
        } else {
            throw Error("This song already exists")
        }

    }

    async destroy(){
        let response = await db.query("DELETE FROM songs WHERE LOWER(song_name) = LOWER($1) RETURNING *", [this.song_name])
        return new Song(response.rows[0])
        
    }

    async update(data){
        const {artist, release_year, genre, description} = data
        let response = await db.query("UPDATE songs SET artist = $1, release_year=$2, genre=$3, description=$4 WHERE LOWER(song_name)=LOWER($5) RETURNING *", [artist, release_year, genre, description, this.song_name])
        console.log(response)
        return new Song(response.rows[0])
    }

}

module.exports = Song