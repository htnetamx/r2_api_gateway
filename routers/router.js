var express = require('express');
var router = express.Router()
var categoryRouter = require('./categoryService')
var productRouter = require('./productService')
var storeRouter = require('./storeService')
var promoRouter = require('./promoService')
var discountRouter = require('./discountService')
var orderRouter = require('./orderService')
var notificationRouter = require('./notificationService')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(categoryRouter) //port 3000
router.use(productRouter) //port 3001
router.use(storeRouter) //port 3004
router.use(promoRouter) //port 3002
router.use(discountRouter) //port 3010
router.use(orderRouter) //port 3011
router.use(notificationRouter) //port 3012

module.exports = router