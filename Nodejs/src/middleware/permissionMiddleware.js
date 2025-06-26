const { Permission } = require('../models');

/**
 * Middleware để kiểm tra quyền hạn chi tiết của người dùng.
 * @param {string} requiredPermission - Tên của quyền cần kiểm tra (ví dụ: 'canDeleteMovie').
 */
const checkPermission = (requiredPermission) => {
  return async (req, res, next) => {
    const user = req.user;

    // Admin luôn có tất cả các quyền, bỏ qua kiểm tra.
    if (user.role === 'admin' || user.isSuperAdmin) {
      return next();
    }

    // Đối với các vai trò khác (ví dụ: moderator), kiểm tra quyền trong CSDL.
    try {
      const userPermissions = await Permission.findOne({ where: { userId: user.id } });

      // Nếu không có record permission hoặc quyền yêu cầu là false/null
      if (!userPermissions || !userPermissions[requiredPermission]) {
        return res.status(403).json({ message: 'Bạn không có quyền thực hiện hành động này.' });
      }

      // Nếu có quyền, cho phép tiếp tục.
      next();
    } catch (error) {
      console.error("Permission check error:", error);
      return res.status(500).json({ message: 'Lỗi server khi kiểm tra quyền.' });
    }
  };
};

module.exports = { checkPermission }; 