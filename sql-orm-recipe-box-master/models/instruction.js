'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instruction = sequelize.define('Instruction', {
    specification: DataTypes.TEXT,
    listOrder: DataTypes.INTEGER,
    recipeID: DataTypes.INTEGER
  }, {});
  Instruction.associate = function(models) {
    // associations can be defined here
  };
  return Instruction;
};