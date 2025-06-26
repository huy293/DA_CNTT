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
    const user = await User.findByPk(userId, { include: Permission });
    if (!user) throw new Error('User not found');

    if (user.isSuperAdmin) {
        // SuperAdmin: full quyền
        const allPermissions = {};
        const permissionFields = Object.keys(Permission.getAttributes());
        permissionFields.forEach(field => {
            if (field !== 'id' && field !== 'userId' && field !== 'createdAt' && field !== 'updatedAt') {
                allPermissions[field] = true;
            }
        });
        return allPermissions;
    }

    if (user.role === 'admin') {
        // Admin thường: full quyền trừ 2 quyền đặc biệt
        const defaultPermissions = {};
        const permissionFields = Object.keys(Permission.getAttributes());
        permissionFields.forEach(field => {
            if (field !== 'id' && field !== 'userId' && field !== 'createdAt' && field !== 'updatedAt') {
                if (field === 'canManageSettings') {
                    defaultPermissions[field] = false;
                } else if (field === 'canManageUsers') {
                    defaultPermissions[field] = !!(user.Permission && user.Permission[field]);
                } else {
                    defaultPermissions[field] = true;
                }
            }
        });
        return defaultPermissions;
    }

    // Đối với moderator: luôn có quyền canViewReport=true, các quyền khác lấy từ bảng Permission
    if (user.role === 'moderator') {
        let perm = await Permission.findOne({ where: { userId } });
        if (!perm) {
            perm = await Permission.create({ userId });
        }
        const result = perm.toJSON();
        result.canViewReport = true;
        return result;
    }

    // Đối với các vai trò khác
    let perm = await Permission.findOne({ where: { userId } });
    if (!perm) {
        perm = await Permission.create({ userId });
    }
    return perm.toJSON();
};