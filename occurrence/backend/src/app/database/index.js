const Sequelize = require('sequelize');

const Occurrence = require('../models/Occurrence');

const databaseConfig = require('../../config/database');

const models = [Occurrence];

class Database {
    constructor() {
        this.init();
    }

    init() {

        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
    }
}

module.exports = new Database();