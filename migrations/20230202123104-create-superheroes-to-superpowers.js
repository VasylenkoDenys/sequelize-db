"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("superheroes_to_superpowers", {
      superheroId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: "superhero_id",
        references: {
          model: "superheroes",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      superpowerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: "superpower_id",
        references: {
          model: "superpowers",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
    await queryInterface.dropTable("superheroes_to_superpowers");
  },
};
