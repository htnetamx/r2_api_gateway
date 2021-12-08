var express = require('express');
var router = express.Router()
var categoryRouter = require('./categoryService')
var productRouter = require('./productService')
var storeRouter = require('./storeService')
var promoRouter = require('./promoService')
var discountRouter = require('./discountService')
var orderRouter = require('./orderService')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(categoryRouter)
router.use(productRouter)
router.use(storeRouter)
router.use(promoRouter)
router.use(discountRouter)
router.use(orderRouter)

module.exports = router