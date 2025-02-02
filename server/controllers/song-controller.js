const Song = require("../models/Song-model")


async function index(req, res){
    try{
        const songs = await Song.getAll()
        res.status(200).json(songs)
    } catch(err){
        res.status(500).json({error: err.message})
    }
}

async function show(req, res){
    try{
        song = req.params.name
        const songs = await Song.getSongByName(song)
        res.status(200).json(songs)
    } catch(err){
        res.status(404).json({error: err.message})
    }
}

async function showGenre(req, res){
    try{
        genre = req.params.genre
        const songs = await Song.getSongsByGenre(genre)
        res.status(200).json(songs)
    } catch(err){
        res.status(404).json({error: err.message})
    }
}

async function showYear(req, res){
    try{
        console.log("hit")
        year = req.params.year
        console.log("hit", year)
        const songs = await Song.getSongsByDecade(year)
        res.status(200).json(songs)
    } catch(err){
        res.status(404).json({error: err.message})
    }
}

async function showDanceability(req, res){
    try{
        danceability = req.params.danceability
        const songs = await Song.getSongsByDanceability(danceability)
        res.status(200).json(songs)
    } catch(err){
        res.status(404).json({error: err.message})
    }
}

async function showEnergy(req, res){
    try{
        energy = req.params.energy
        const songs = await Song.getSongsByEnergy(energy)
        res.status(200).json(songs)
    } catch(err){
        res.status(404).json({error: err.message})
    }
}

async function create(req, res){
    try{
        data = req.body
        const songs = await Song.create(data)
        res.status(201).json(songs)
    } catch(err){
        res.status(404).json({error: err.message})
    }
}

async function destroy(req, res){
    try{
        const songName = req.params.name
        const song = await Song.getSongByName(songName)

        const result = await song.destroy()
        res.status(204).end()
    } catch(err){
        res.status(404).json({error: err.message})
    }
}

async function update(req, res){
    try{
        const songName = req.params.name
        const data = req.body
        const song = await Song.getSongByName(songName)
        const result = await song.update(data)

        res.status(200).json(result)
    } catch(err){
        res.status(404).json({error: err.message})
    }
}


module.exports = {index, show, showGenre, showYear, showDanceability, showEnergy, create, destroy, update}