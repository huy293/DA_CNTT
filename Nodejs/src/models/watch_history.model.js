module.exports = (sequelize, DataTypes) => {
  const WatchHistory = sequelize.define('WatchHistory', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    episodeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    timestamps: true
  });

  WatchHistory.associate = (models) => {
    WatchHistory.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
    WatchHistory.belongsTo(models.Episode, {
      foreignKey: 'episodeId',
      as: 'episode',
    });
  };

  return WatchHistory;
};