const express = require('express')
const OccurController = require('./controllers/OccurController')
const routes = express.Router()

const occurController = new OccurController()

routes.post('/api/occur',
    occurController.validate(),
    occurController.create)

module.exports = routes