class OccurController {
    async create(req, res) {
        const teste = req.body.content
        if (teste) {
            console.log(teste)
            return res.sendStatus(200)
        } else {
            return res.sendStatus(400)
        }
    }
}

module.exports = OccurController