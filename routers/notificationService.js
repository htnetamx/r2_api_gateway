var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:3012'
const api = apiAdapter(BASE_URL)

router.get('/api/v1/notification', (req, res) => {
  api.get(req.path).then(resp => {
    res.json(resp.data)
  })
})

router.get('/api/v1/notification/:id', (req, res) => {
  api.get(req.path).then(resp => {
    res.json(resp.data)
  })
})

router.post('/api/v1/notification', (req, res) => {
    api.post(req.path, req.body).then(resp => {
      res.json(resp.data)
    })
  })
  
  module.exports = router