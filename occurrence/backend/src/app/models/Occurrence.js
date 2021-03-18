const Sequelize = require('sequelize');

class Occurrence extends Sequelize.Model {
    static init(sequelize) {
        super.init(
            {
                title: Sequelize.STRING,
                start: Sequelize.DATE,
                end: Sequelize.DATE
                // falta o array de acontecimentos
            }, {
                sequelize
            }
        )
        return this
    }
}

module.exports = Occurrence;