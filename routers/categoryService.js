var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:3000'
const api = apiAdapter(BASE_URL)

router.get('/api/v1/category', (req, res) => {
  api.get(req.path).then(resp => {
    res.json(resp.data)
  })
})

router.get('/api/v1/category/:id', (req, res) => {
  api.get(req.path).then(resp => {
    res.json(resp.data)
  })
})

router.get('/api/v1/category/:id/product', (req, res) => {
  api.get(req.path).then(resp => {
    res.json(resp.data)
  })
})

module.exports = router