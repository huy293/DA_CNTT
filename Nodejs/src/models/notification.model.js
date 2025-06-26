module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    message: { type: DataTypes.STRING, allowNull: false },
    forRole: { type: DataTypes.STRING, allowNull: false }, // 'admin', 'moderator', 'user'
    time: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, {
    timestamps: true
  });
  return Notification;
}; 