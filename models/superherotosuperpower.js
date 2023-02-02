'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuperheroToSuperpower extends Model {
    static associate(models) {
      // define association here
    }
  }
  SuperheroToSuperpower.init({
    superheroId: DataTypes.INTEGER,
    superpowerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SuperheroToSuperpower',
  });
  return SuperheroToSuperpower;
};