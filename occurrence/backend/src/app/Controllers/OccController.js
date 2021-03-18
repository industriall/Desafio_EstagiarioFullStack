const Occurrence = require('../models/Occurrence');

class OccController {
    async store(req, res) {
        const occurrence = await Occurrence.create(req.body);

        return res.json(occurrence);
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