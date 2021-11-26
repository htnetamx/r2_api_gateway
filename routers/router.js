var express = require('express');
var router = express.Router()
var feedRouter = require('./categoryService')
var hashtagRouter = require('./productService')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(feedRouter)
router.use(hashtagRouter)

module.exports = router