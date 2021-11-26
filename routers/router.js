var express = require('express');
var router = express.Router()
var categoryRouter = require('./categoryService')
var productRouter = require('./productService')
var storeRouter = require('./storeService')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(categoryRouter)
router.use(productRouter)
router.use(storeRouter)

module.exports = router