const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard.Controller');
const authMiddleware = require('../middleware/authMiddleware');

// Test route để kiểm tra API
router.get('/test', dashboardController.test);

// Tất cả các route dashboard đều yêu cầu quyền admin hoặc moderator
// router.use(authMiddleware.protect('admin', 'moderator'));

// Lấy thống kê tổng quan
router.get('/stats', dashboardController.getStats);

// Lấy thống kê lượt xem theo tháng
router.get('/monthly-views', dashboardController.getMonthlyViews);

// Lấy phân bố thể loại phim
router.get('/genre-distribution', dashboardController.getGenreDistribution);

// Lấy top phim xem nhiều nhất
router.get('/top-seasons', dashboardController.getTopSeasons);

// Lấy top user xem nhiều nhất
router.get('/top-users', dashboardController.getTopUsers);

// Lấy top phim được yêu thích nhất
router.get('/top-favorite-movies', dashboardController.getTopFavoriteMovies);

// Lấy top phim rating cao nhất
router.get('/top-rated-seasons', dashboardController.getTopRatedSeasons);

// Lấy user mới nhất
router.get('/newest-users', dashboardController.getNewestUsers);

// Lấy phim mới nhất
router.get('/newest-seasons', dashboardController.getNewestSeasons);

// Lấy tỷ lệ user theo vai trò
router.get('/user-role-distribution', dashboardController.getUserRoleDistribution);

// Lấy số lượng comment theo tháng
router.get('/comments-by-month', dashboardController.getCommentsByMonth);

// Lấy tỷ lệ hoàn thành xem phim
router.get('/completion-rate', dashboardController.getCompletionRate);

// Báo cáo hệ thống tổng hợp
router.get('/report', dashboardController.getSystemReport);

module.exports = router;
