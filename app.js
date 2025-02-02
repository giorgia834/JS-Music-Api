const express = require('express')
const cors = require('cors')

const app = express()
const logger = require('./logger')
const songRouter = require('./server/routers/song-router')

//Middleware
app.use(cors())
app.use(express.json())
app.use(logger)

app.use("/songs", songRouter)

module.exports = app



