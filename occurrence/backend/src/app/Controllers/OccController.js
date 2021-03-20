const Occurrence = require('../models/Occurrence');

const { validationResult } = require('express-validator');

class OccController {

    async store(req, res, next) {

        try {
            const errors = validationResult(req);

            console.log(errors.array())

            if(!errors.isEmpty()) {
                const messages = []
                
                for(var cont=0; cont<errors.array().length; cont++)
                    messages.push(errors.array()[cont].msg)

                res.status(400).json({
                    sucesso: false,
                    errorMessages: messages
                })

                return;
            }

            const occurrence = await Occurrence.create(req.body);

            return res.json({
                sucesso: true,
                id: occurrence.id
            });

        } catch(err) {
            return next(err);
        }

    }

    async index(req, res) {
        const occurences = await Occurrence.findAll();

        if(occurences.length > 0)
            return res.json(occurences);

        return res.json('Nenhuma ocorrência encontrada.');
    }

    async deleteAll(req, res) {
        const occurences = await Occurrence.destroy({
            where: {}
        });

        if(occurences > 0)
            return res.json('Todas as ' + occurences + ' ocorrências foram deletadas.');

        return res.json('Não há ocorrências a serem deletadas.');
    }
}

module.exports = new OccController();