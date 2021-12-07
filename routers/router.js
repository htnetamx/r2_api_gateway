var express = require('express');
var router = express.Router()
var categoryRouter = require('./categoryService')
var productRouter = require('./productService')
var storeRouter = require('./storeService')
var promoRouter = require('./promoService')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(categoryRouter)
router.use(productRouter)
router.use(storeRouter)
router.use(promoRouter)

module.exports = router