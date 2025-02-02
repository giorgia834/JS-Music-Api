const middleware = (req, res, next) => {
    console.log("hit middleware")
    next()
}

module.exports = middleware