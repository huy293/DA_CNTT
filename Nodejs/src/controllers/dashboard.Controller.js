const dashboardService = require('../services/dashboard.Service');
const { User, Movie, Favorite, WatchHistory, Log } = require('../models');
const { Op, fn, col, literal } = require('sequelize');

// Lấy thống kê tổng quan
exports.getStats = async (req, res) => {
    try {
        const stats = await dashboardService.getStats();
        res.json(stats);
    } catch (error) {
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
        res.status(500).json({
            error: 'Không thể lấy phân bố thể loại phim',
            details: error.message
        });
    }
};

// Lấy hoạt động gần đây
exports.getRecentActivities = async (req, res) => {
    try {
        const activities = await dashboardService.getRecentActivities();
        res.json(activities);
    } catch (error) {
        res.status(500).json({
            error: 'Không thể lấy hoạt động gần đây',
            details: error.message
        });
    }
};

// Lấy top phim
exports.getTopSeasons = async (req, res) => {
    try {
        const data = await dashboardService.getTopSeasons();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Lấy tỷ lệ hoàn thành
exports.getCompletionRate = async (req, res) => {
    try {
        const completionRate = await dashboardService.getCompletionRate();
        res.json(completionRate);
    } catch (error) {
        res.status(500).json({
            error: 'Không thể lấy tỷ lệ hoàn thành',
            details: error.message
        });
    }
};

exports.getNewUsersByMonth = async (req, res) => {
    try {
        const data = await dashboardService.getNewUsersByMonth();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getNewMoviesByMonth = async (req, res) => {
    try {
        const data = await dashboardService.getNewMoviesByMonth();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTopUsers = async (req, res) => {
    try {
        const data = await dashboardService.getTopUsers();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTopFavoriteMovies = async (req, res) => {
    try {
        const data = await dashboardService.getTopFavoriteMovies();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAverageRatingByGenre = async (req, res) => {
    try {
        const data = await dashboardService.getAverageRatingByGenre();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCommentsByMonth = async (req, res) => {
    try {
        const data = await dashboardService.getCommentsByMonth();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUserRoleDistribution = async (req, res) => {
    try {
        const data = await dashboardService.getUserRoleDistribution();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getNewestUsers = async (req, res) => {
    try {
        const data = await dashboardService.getNewestUsers();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getNewestSeasons = async (req, res) => {
    try {
        const data = await dashboardService.getNewestSeasons();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTopRatedSeasons = async (req, res) => {
    try {
        const data = await dashboardService.getTopRatedSeasons();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

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
        res.status(500).json({ message: 'Lỗi khi lấy báo cáo hệ thống' });
    }
};