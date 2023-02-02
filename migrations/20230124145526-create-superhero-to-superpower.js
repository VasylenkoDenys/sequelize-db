'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('superheroes_to_superpowers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      superheroId: {
        type: Sequelize.INTEGER,
        field: "superhero_id",
      },
      superpowerId: {
        type: Sequelize.INTEGER,
        field: "superpower_id",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",

      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at",

      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('superheroes_to_superpowers');
  }
};