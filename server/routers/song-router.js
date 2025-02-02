const {Router} = require('express')
const songController = require('../controllers/song-controller')

const songRouter = Router()

songRouter.get("/", songController.index)
songRouter.get("/:name", songController.show)
songRouter.post("/", songController.create)
songRouter.delete("/:name", songController.destroy)
songRouter.patch("/:name", songController.update)


module.exports = songRouter

