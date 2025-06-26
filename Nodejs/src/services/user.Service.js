const {User, Permission} = require('../models');

exports.Changerole = async (id, role) => {
    const user = await User.findByPk(id);
    if (!user) return null;
    await user.update({ role });
    return user;
  }

exports.GetAll = async () => {
    return await User.findAll();
}
exports.GetById = async (id) => {
    return await User.findByPk(id);
}
exports.updateAvatar = async (id, avatar) => {
    const user = await User.findByPk(id);
    if (!user) return null;
    await user.update({ avatar });
    return user;
}

// Cập nhật phân quyền chi tiết
exports.updatePermissions = async (userId, updates) => {
    let perm = await Permission.findOne({ where: { userId } });
    if (!perm) {
        perm = await Permission.create({ userId });
    }
    await perm.update(updates);
    return perm.toJSON();
}

exports.getPermissions = async (userId) => {
  let perm = await Permission.findOne({ where: { userId } });
  if (!perm) {
    perm = await Permission.create({ userId });
  }
  if (user.role === 'admin') {
    // Trả về object với tất cả các quyền là true
    return {
      canDeleteMovie: true,
      canManageComment: true,
      canViewReport: true,
      // ... các quyền khác
    };
  }
  return perm.toJSON();
};