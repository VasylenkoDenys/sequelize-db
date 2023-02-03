'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('superpowers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      powerName: {
        type: Sequelize.STRING(64),
        field: "power_name",
        allowNull: false,
        unique: true,
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
    await queryInterface.dropTable('superpowers');
  }
};