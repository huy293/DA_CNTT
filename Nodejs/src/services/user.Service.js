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
    const user = await User.findByPk(userId);
    if (!user) throw new Error('User not found');

    if (user.role === 'admin' || user.isSuperAdmin) {
        // Admin và SuperAdmin có tất cả các quyền
        const allPermissions = {};
        const permissionFields = Object.keys(Permission.getAttributes());
        permissionFields.forEach(field => {
            if (field !== 'id' && field !== 'userId' && field !== 'createdAt' && field !== 'updatedAt') {
                allPermissions[field] = true;
            }
        });
        return allPermissions;
    }

    // Đối với các vai trò khác như 'moderator'
    let perm = await Permission.findOne({ where: { userId } });
    if (!perm) {
        // Nếu không có record, tạo một record mặc định
        perm = await Permission.create({ userId });
    }
    return perm.toJSON();
};