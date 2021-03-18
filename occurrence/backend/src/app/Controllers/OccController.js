const Occurrence = require('../models/Occurrence');

class OccController {
    async store(req, res) {
        const occurrence = await Occurrence.create(req.body);

        return res.json(occurrence);
    }

    async index(req, res) {
        const occurences = await Occurrence.findAll();

        return res.json(occurences);
    }

    async deleteAll(req, res) {
        const occurences = await Occurrence.destroy({
            where: {}
        });
    }
}

module.exports = new OccController();