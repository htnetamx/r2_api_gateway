var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:3002'
const api = apiAdapter(BASE_URL)

router.get('/api/v1/promo', (req, res) => {
  api.get(req.path).then(resp => {
    res.json(resp.data)
  })
})

router.get('/api/v1/promo/:id', (req, res) => {
  api.get(req.path).then(resp => {
    res.json(resp.data)
  })
})

module.exports = router