const {Router} = require('express')
const songController = require('../controllers/song-controller')
const middleware = require('../../middleware')

const songRouter = Router()

songRouter.get("/", songController.index)
songRouter.get("/:name", songController.show)
songRouter.get("/genre/:genre", songController.showGenre)
songRouter.get("/year/:year", songController.showYear)
songRouter.get("/danceability/:danceability", songController.showDanceability)
songRouter.get("/energy/:energy", songController.showEnergy)
songRouter.post("/", songController.create)
songRouter.delete("/:name", songController.destroy)
songRouter.patch("/:name", songController.update)


module.exports = songRouter

