var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:3010'
const api = apiAdapter(BASE_URL)

router.get('/api/v1/discount', (req, res) => {
  api.get(req.path).then(resp => {
    res.json(resp.data)
  })
})

router.get('/api/v1/discount/:id', (req, res) => {
  api.get(req.path).then(resp => {
    res.json(resp.data)
  })
})

module.exports = router