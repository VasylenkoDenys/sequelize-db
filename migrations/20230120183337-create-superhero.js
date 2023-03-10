"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("superheroes", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nickname: {
        type: Sequelize.STRING(64),
        allowNull: false,
        unique: true,
      },
      realName: {
        type: Sequelize.STRING(64),
        field: "real_name",
        allowNull: false,
      },
      originDescription: {
        type: Sequelize.STRING,
        field: "origin_description",
      },
      catchPhrase: {
        type: Sequelize.STRING,
        field: "catch_phrase",
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
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("superheroes");
  },
};
