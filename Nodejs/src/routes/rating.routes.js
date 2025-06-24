const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/rating.Controller');
const authMiddleware = require('../middleware/authMiddleware');

// Chỉ cần đăng nhập để đánh giá hoặc lấy rating của user
router.post('/:seasonId', authMiddleware.protect(), ratingController.createOrUpdateRating); // Đánh giá hoặc cập nhật rating
router.get('/:seasonId', authMiddleware.protect(), ratingController.getUserRatingForMovie); // Lấy rating của user cho phim

// Chỉ admin mới được xem tất cả ratings hoặc trung bình rating
router.get('/admin/:seasonId', authMiddleware.protect('admin'), ratingController.getAllRatingsForMovie); // Xem tất cả ratings của bộ phim
router.get('/admin/average/:seasonId', authMiddleware.protect('admin'), ratingController.getAverageRatingForMovie); // Lấy trung bình rating của bộ phim

module.exports = router;
