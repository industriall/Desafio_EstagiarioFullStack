const Router = require('express');
const { body } = require('express-validator');

const routes = new Router();

const OccController = require('./app/Controllers/OccController');

routes.post(
    '/occurrences',

    body('title').custom((value) => {

        if(value.length > 45)
            return false;
        return true;
        
    }).withMessage('O título possui mais de 45 caracteres'),

    body('start').custom(value => {

        if(value === undefined || value === "")
            return false;
        return true;

    }).withMessage('Data de início vazia ou desatualizada.'),

    body('end').custom(value => {

        if(value === undefined || value === "")
            return false;
        return true;

    }).withMessage('Data de final vazia ou desatualizada.')
    .custom((value, { req }) => {

        // evita repetir mensagem de erro
        if(value === undefined || value === "")
            return true;

        if(req.body.start > value)
            return false; // inicio > final
            
        return true; // inicio < final (correto)

    }).withMessage('A data de início é maior que a data final'),

    body('events').custom(value => {

        if(value === undefined || value.length===0)
            return false;

        return true;

    }).withMessage('Nenhum acontecimento adicionado.'),

    OccController.store
    );


routes.get('/occurrences', OccController.index);

routes.delete('/occurrences', OccController.deleteAll);

routes.get('/', (req, res) => {
    res.json({ message: 'Bom dia.' });
})

module.exports = routes;