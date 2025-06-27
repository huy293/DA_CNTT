const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');
const authMiddleware = require('../middleware/authMiddleware');
const permissionMiddleware = require('../middleware/permissionMiddleware');

// Lấy thông báo cho từng vai trò (admin, moderator, user)
router.get('/:role', authMiddleware.protect(), notificationController.getNotifications);

// Tạo notification (chỉ cho admin/super admin)
router.post('/', authMiddleware.protect(), permissionMiddleware.requireAdmin(), notificationController.createNotification);

// Xóa notification (chỉ cho admin/super admin)
router.delete('/:id', authMiddleware.protect(), permissionMiddleware.requireAdmin(), notificationController.deleteNotification);

module.exports = router;
