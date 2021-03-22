'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Occurrence extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Occurrence.init({
        title: DataTypes.STRING,
        start: DataTypes.STRING,
        end: DataTypes.STRING,
        occurrences: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Occurrence',
    })
    return Occurrence
}