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


module.exports = {index, show, create, destroy, update}