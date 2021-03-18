const Router = require('express');

const routes = new Router();

const OccController = require('./app/Controllers/OccController');

routes.post('/Occurrences', OccController.store);
routes.get('/Occurrences', OccController.index);

routes.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
})

module.exports = routes;