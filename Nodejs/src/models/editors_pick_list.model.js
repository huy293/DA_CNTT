const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const EditorsPickList = sequelize.define('EditorsPickList', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    movieIds: {
      type: DataTypes.JSON, // Lưu mảng id phim
      allowNull: false,
      defaultValue: [],
    },
    isBanner: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    tableName: 'editors_pick_list',
    timestamps: true,
  });
  return EditorsPickList;
}; 