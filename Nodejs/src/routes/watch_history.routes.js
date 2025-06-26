const express = require('express');
const router = express.Router();
const watchHistoryController = require('../controllers/watch_history.Controller');
const authMiddleware = require('../middleware/authMiddleware'); // middleware gán req.user

// tất cả routes phải đăng nhập
router.use(authMiddleware.protect());

// Route tạo mới lịch sử xem
router.post('/', watchHistoryController.createWatchHistory);

// Route lấy lịch sử xem phim của user
router.get('/:userId', watchHistoryController.getWatchHistoryByUser);

// Route xóa lịch sử xem
router.delete('/:historyId', watchHistoryController.deleteWatchHistory);

// Route để xóa toàn bộ lịch sử của người dùng
router.delete('/user/history', watchHistoryController.clearWatchHistory);

// Route để xóa nhiều mục lịch sử cùng lúc
router.delete('/bulk-delete', watchHistoryController.bulkDeleteWatchHistory);

// Route cập nhật tiến độ phim bộ
router.patch('/:historyId', watchHistoryController.updateWatchHistory);

// Route lấy thống kê lịch sử xem phim
router.get('/:userId/stats', watchHistoryController.getWatchHistoryStats);

module.exports = router;
