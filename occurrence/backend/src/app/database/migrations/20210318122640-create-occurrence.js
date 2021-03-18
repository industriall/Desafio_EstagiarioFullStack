'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.createTable('occurrences', 
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      start: {
        type: Sequelize.DATE,
        allowNull: false
      },
      end: {
        type: Sequelize.DATE,
        allowNull: false
      },
      // falta o array de acontecimentos
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

    });
     

  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('occurrences');
  }
};
