const Router = require('express');
const { store } = require('./app/Controllers/OccController'); // precisa?
const { check, body, validationResult } = require('express-validator');

const routes = new Router();

const OccController = require('./app/Controllers/OccController');

// routes.post(
//     '/occurrences', 
//     body('title', 'Sem título').exists().notEmpty(),
//     body('start', 'Data de início inválida').exists(),
//     body('end', 'Data de fim inválida').exists(),
//     body('events', 'Sem título').exists().notEmpty(),
//     OccController.store
//     );

routes.post(
    '/occurrences',

    body('title').custom((value) => {

        if(value.length > 45)
            return false;
        return true;
        
    }).withMessage('O título possui mais de 5 caracteres'),

    body('start', 'Data de início inválida').exists(),

    body('end').custom((value, { req }) => {

        if(req.body.start > value)
            return false; // informa erro
        return true; // sem erro

    }).withMessage('A data de início é maior que a data final'),

    body('events', 'Nenhum acontecimento adicionado.').exists().notEmpty(),
    OccController.store
    );




routes.get('/occurrences', OccController.index);

routes.delete('/occurrences', OccController.deleteAll);

routes.get('/', (req, res) => {
    res.json({ message: 'Bom dia.' });
})

module.exports = routes;