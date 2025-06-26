module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define('Permission', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    // Quyền cho Movie Center
    canManageMovies: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    // Quyền cho User & Interaction
    canManageUsers: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    // Quyền cho System Settings
    canManageSettings: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    canDeleteMovie: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    canManageComment: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    canViewReport: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
    // Thêm các quyền khác nếu cần
  }, {});
  Permission.associate = (models) => {
    Permission.belongsTo(models.User, { foreignKey: 'userId', as: 'User' });
  };
  return Permission;
};