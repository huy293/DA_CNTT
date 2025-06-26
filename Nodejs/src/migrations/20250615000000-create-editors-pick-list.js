module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('editors_pick_list', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      movieIds: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: [],
      },
      isBanner: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('editors_pick_list');
  },
}; 