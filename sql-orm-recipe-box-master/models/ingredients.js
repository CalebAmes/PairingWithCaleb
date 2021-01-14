'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredients = sequelize.define('Ingredients', {
    amount: DataTypes.DECIMAL,
    measurementUnitID: DataTypes.INTEGER,
    foodStuff: DataTypes.STRING,
    recipeID: DataTypes.INTEGER
  }, {});
  Ingredients.associate = function(models) {
    // associations can be defined here
  };
  return Ingredients;
};