"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Superhero.init(
    {
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: true,
          isAlpha: true,
          notEmpty: true,
        },
      },
      realName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          isAlpha: true,
          notEmpty: true,
        },
      },
      originDescription: {
        type: DataTypes.STRING,
        validate: {
          isAlpha: true,
        },
      },
      superpowers: { type: DataTypes.STRING },
      catchPhrase: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "Superhero",
      tableName: "superheroes",
      underscored: true,
    }
  );
  return Superhero;
};
