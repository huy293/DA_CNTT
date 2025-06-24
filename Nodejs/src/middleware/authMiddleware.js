const jwt = require("jsonwebtoken");
require("dotenv").config();
const { User } = require('../models'); // Import User model

/**
 * Middleware để bảo vệ các route, yêu cầu người dùng phải đăng nhập.
 */
const protect = () => {
  return async (req, res, next) => {
    try {
      // 1) Lấy token từ cookie và kiểm tra xem nó có tồn tại không
      const token = req.cookies.token; 
      if (!token) {
        return res.status(401).json({ message: "Bạn chưa đăng nhập. Vui lòng đăng nhập để tiếp tục." });
      }

      // 2) Xác thực token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // 3) Kiểm tra xem người dùng còn tồn tại không
      const currentUser = await User.findByPk(decoded.id);
      if (!currentUser) {
        return res.status(401).json({ message: 'Người dùng sở hữu token này không còn tồn tại.' });
      }

      // 4) Gắn thông tin người dùng vào request
      req.user = currentUser; 

      next();
    } catch (err) {
      if (err.name === 'JsonWebTokenError') {
        return res.status(401).json({ message: "Token không hợp lệ." });
      }
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: "Token đã hết hạn." });
      }
      return res.status(500).json({ message: "Đã có lỗi xảy ra.", error: err.message });
    }
  };
};


/**
 * Middleware để giới hạn quyền truy cập dựa trên vai trò.
 * @param  {...string} roles - Danh sách các vai trò được phép.
 */
const restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles là một mảng ['admin', 'moderator']. req.user.role là một chuỗi 'user'
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        status: 'fail',
        message: 'Bạn không có quyền thực hiện hành động này.'
      });
    }
    next();
  };
};

module.exports = {
  protect,
  restrictTo
};
