const dashboardService = require('../services/dashboard.Service');
const db = require('../models');
const { Op, fn, col, literal } = require('sequelize');

const { User, Movie, Favorite, WatchHistory, Log } = db;

// Test endpoint để kiểm tra
exports.test = async (req, res) => {
    try {
        res.json({ 
            message: 'Dashboard API is working',
            models: Object.keys(db),
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lấy thống kê tổng quan
exports.getStats = async (req, res) => {
    try {
        const stats = await dashboardService.getStats();
        res.json(stats);
    } catch (error) {
        console.error('Error in getStats:', error);
        res.status(500).json({
            error: 'Không thể lấy thống kê tổng quan',
            details: error.message
        });
    }
};

// Lấy thống kê lượt xem theo tháng
exports.getMonthlyViews = async (req, res) => {
    try {
        const monthlyViews = await dashboardService.getMonthlyViews();
        res.json(monthlyViews);
    } catch (error) {
        console.error('Error in getMonthlyViews:', error);
        res.status(500).json({
            error: 'Không thể lấy thống kê lượt xem theo tháng',
            details: error.message
        });
    }
};

// Lấy phân bố thể loại phim
exports.getGenreDistribution = async (req, res) => {
    try {
        const distribution = await dashboardService.getGenreDistribution();
        res.json(distribution);
    } catch (error) {
        console.error('Error in getGenreDistribution:', error);
        res.status(500).json({
            error: 'Không thể lấy phân bố thể loại phim',
            details: error.message
        });
    }
};

// Lấy top phim xem nhiều nhất
exports.getTopSeasons = async (req, res) => {
    try {
        const data = await dashboardService.getTopSeasons();
        res.json(data);
    } catch (error) {
        console.error('Error in getTopSeasons:', error);
        res.status(500).json({ error: error.message });
    }
};

// Lấy top user xem nhiều nhất
exports.getTopUsers = async (req, res) => {
    try {
        const data = await dashboardService.getTopUsers();
        res.json(data);
    } catch (error) {
        console.error('Error in getTopUsers:', error);
        res.status(500).json({ error: error.message });
    }
};

// Lấy top phim được yêu thích nhất
exports.getTopFavoriteMovies = async (req, res) => {
    try {
        const data = await dashboardService.getTopFavoriteMovies();
        res.json(data);
    } catch (error) {
        console.error('Error in getTopFavoriteMovies:', error);
        res.status(500).json({ error: error.message });
    }
};

// Lấy top phim rating cao nhất
exports.getTopRatedSeasons = async (req, res) => {
    try {
        const data = await dashboardService.getTopRatedSeasons();
        res.json(data);
    } catch (error) {
        console.error('Error in getTopRatedSeasons:', error);
        res.status(500).json({ error: error.message });
    }
};

// Lấy user mới nhất
exports.getNewestUsers = async (req, res) => {
    try {
        const data = await dashboardService.getNewestUsers();
        res.json(data);
    } catch (error) {
        console.error('Error in getNewestUsers:', error);
        res.status(500).json({ error: error.message });
    }
};

// Lấy phim mới nhất
exports.getNewestSeasons = async (req, res) => {
    try {
        const data = await dashboardService.getNewestSeasons();
        res.json(data);
    } catch (error) {
        console.error('Error in getNewestSeasons:', error);
        res.status(500).json({ error: error.message });
    }
};

// Lấy tỷ lệ user theo vai trò
exports.getUserRoleDistribution = async (req, res) => {
    try {
        const data = await dashboardService.getUserRoleDistribution();
        res.json(data);
    } catch (error) {
        console.error('Error in getUserRoleDistribution:', error);
        res.status(500).json({ error: error.message });
    }
};

// Lấy số lượng comment theo tháng
exports.getCommentsByMonth = async (req, res) => {
    try {
        const data = await dashboardService.getCommentsByMonth();
        res.json(data);
    } catch (error) {
        console.error('Error in getCommentsByMonth:', error);
        res.status(500).json({ error: error.message });
    }
};

// Lấy tỷ lệ hoàn thành xem phim
exports.getCompletionRate = async (req, res) => {
    try {
        const completionRate = await dashboardService.getCompletionRate();
        res.json(completionRate);
    } catch (error) {
        console.error('Error in getCompletionRate:', error);
        res.status(500).json({
            error: 'Không thể lấy tỷ lệ hoàn thành',
            details: error.message
        });
    }
};

// Báo cáo hệ thống tổng hợp
exports.getSystemReport = async (req, res) => {
    try {
        const totalUsers = await User.count();
        const totalAdmins = await User.count({ where: { role: 'admin' } });
        const totalModerators = await User.count({ where: { role: 'moderator' } });
        const totalNormalUsers = await User.count({ where: { role: 'user' } });
        const totalMovies = await Movie.count();
        const totalFavorites = await Favorite.count();
        const totalViews = await WatchHistory.count();

        // Top 5 active users
        const topUsers = await Log.findAll({
            attributes: ['userId', [fn('COUNT', col('id')), 'actions']],
            group: ['userId'],
            order: [[literal('actions'), 'DESC']],
            limit: 5,
            include: [{ model: User, attributes: ['username', 'email'] }]
        });

        // Top 5 most viewed movies
        const topMovies = await WatchHistory.findAll({
            attributes: ['movieId', [fn('COUNT', col('id')), 'views']],
            group: ['movieId'],
            order: [[literal('views'), 'DESC']],
            limit: 5,
            include: [{ model: Movie, attributes: ['title'] }]
        });

        res.json({
            totalUsers,
            totalAdmins,
            totalModerators,
            totalNormalUsers,
            totalMovies,
            totalFavorites,
            totalViews,
            topUsers,
            topMovies
        });
    } catch (err) {
        console.error('Error in getSystemReport:', err);
        res.status(500).json({ message: 'Lỗi khi lấy báo cáo hệ thống' });
    }
};