'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ingredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        allowNull: false,
        type: Sequelize.DECIMAL(5,2)
      },
      measurementUnitID: {
        allowNull: false,
        references: { model: "MeasurementUnits" },
        type: Sequelize.INTEGER
      },
      foodStuff: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      recipeID: {
        allowNull: false,
        references: { model: "Recipes" },
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Ingredients');
  }
};