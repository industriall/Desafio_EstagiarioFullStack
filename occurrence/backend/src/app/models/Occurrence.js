const Sequelize = require('sequelize');

class Occurrence extends Sequelize.Model {
    static init(sequelize) {
        super.init(
            {
                title: Sequelize.STRING,
                start: Sequelize.DATE,
                end: Sequelize.DATE,
                events: Sequelize.ARRAY(Sequelize.TEXT)
            }, {
                sequelize
            }
        )
        return this;
    }
}

module.exports = Occurrence;