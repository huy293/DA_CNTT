"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Users", "isSuperAdmin", {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Users", "isSuperAdmin");
  }
}; 