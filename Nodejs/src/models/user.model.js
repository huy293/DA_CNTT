const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.WatchHistory, { foreignKey: 'userId' });
      User.hasMany(models.Comment, { foreignKey: 'userId' });
      User.hasMany(models.Rating, { foreignKey: 'userId' });
      User.hasMany(models.Favorite, { foreignKey: 'userId' });
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.ENUM('user', 'admin', 'moderator'),
      defaultValue: 'user'
    },
    status: {
      type: DataTypes.ENUM('active', 'locked'),
      defaultValue: 'active'
    },
    isSuperAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      afterCreate: async (user, options) => {
        if (user.role === 'moderator') {
          // Tự động tạo record permission cho moderator mới
          await sequelize.models.Permission.create({ userId: user.id });
        }
      },
      afterUpdate: async (user, options) => {
        // Kiểm tra xem trường role có bị thay đổi không
        if (user.changed('role')) {
          if (user.role === 'moderator') {
            // Nếu user được nâng cấp lên moderator, tìm hoặc tạo record permission
            await sequelize.models.Permission.findOrCreate({
              where: { userId: user.id },
            });
          } else if (user.previous('role') === 'moderator') {
            // Nếu user bị giáng cấp từ moderator, xóa record permission
            await sequelize.models.Permission.destroy({
              where: { userId: user.id },
            });
          }
        }
      }
    }
  });
  return User;
};
  