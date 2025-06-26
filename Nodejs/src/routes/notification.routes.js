const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');
const authMiddleware = require('../middleware/authMiddleware');

// Lấy thông báo cho từng vai trò
router.get('/:role', authMiddleware.protect(), notificationController.getNotifications);

// Tạo notification (chỉ cho admin/super admin)
router.post('/', authMiddleware.protect(), notificationController.createNotification);

// Xóa notification (chỉ cho admin/super admin)
router.delete('/:id', authMiddleware.protect(), notificationController.deleteNotification);

module.exports = router;
