'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Permissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      canManageMovies: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      canManageUsers: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      canManageSettings: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      canDeleteMovie: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      canManageComment: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      canViewReport: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Permissions');
  }
};