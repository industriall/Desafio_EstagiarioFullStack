const express = require('express')
const OccurController = require('./controllers/OccurController')

const routes = express.Router()
const occurController = new OccurController()

routes.post('/occur', occurController.create)

module.exports = routes