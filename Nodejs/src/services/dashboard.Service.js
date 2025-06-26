const db = require('../models');
const { Op } = require('sequelize');

const { 
    Movie, 
    User, 
    Rating, 
    Genre, 
    Comment, 
    Season, 
    Episode, 
    WatchHistory, 
    Favorite, 
    Log 
} = db;

// Lấy thống kê tổng quan
exports.getStats = async () => {
    try {
        const [
            totalMovies,
            totalUsers,
            totalEpisodes,
            totalRatings,
            totalComments
        ] = await Promise.all([
            Movie.count(),
            User.count(),
            Episode.count(),
            Rating.count(),
            Comment.count()
        ]);

        const averageRating = await Rating.findOne({
            attributes: [
                [db.sequelize.fn('AVG', db.sequelize.col('rating')), 'averageRating']
            ],
            raw: true
        });

        return {
            totalMovies,
            totalUsers,
            totalEpisodes,
            totalRatings,
            totalComments,
            averageRating: Number(averageRating?.averageRating || 0).toFixed(1)
        };
    } catch (error) {
        throw new Error('Lỗi khi lấy thống kê tổng quan: ' + error.message);
    }
};

// Lấy thống kê lượt xem theo tháng
exports.getMonthlyViews = async () => {
    try {
        const currentYear = new Date().getFullYear();
        const monthlyViews = await WatchHistory.findAll({
            attributes: [
                [db.sequelize.fn('MONTH', db.sequelize.col('createdAt')), 'month'],
                [db.sequelize.fn('COUNT', db.sequelize.col('id')), 'views']
            ],
            where: {
                createdAt: {
                    [Op.gte]: new Date(currentYear, 0, 1),
                    [Op.lte]: new Date(currentYear, 11, 31)
                }
            },
            group: [db.sequelize.fn('MONTH', db.sequelize.col('createdAt'))],
            raw: true
        });

        // Điền đầy đủ 12 tháng với giá trị mặc định là 0
        const allMonths = Array.from({ length: 12 }, (_, i) => ({
            month: i + 1,
            views: 0
        }));

        monthlyViews.forEach(view => {
            allMonths[view.month - 1].views = parseInt(view.views);
        });

        return allMonths;
    } catch (error) {
        throw new Error('Lỗi khi lấy thống kê lượt xem theo tháng: ' + error.message);
    }
};

// Lấy phân bố thể loại phim
exports.getGenreDistribution = async () => {
    try {
        const genres = await Genre.findAll({
            attributes: [
                'id',
                'name',
                [db.sequelize.fn('COUNT', db.sequelize.col('Movies.id')), 'movieCount']
            ],
            include: [
                {
                    model: Movie,
                    as: 'Movies',
                    attributes: [],
                    through: { attributes: [] },
                    required: false
                }
            ],
            group: ['Genre.id', 'Genre.name'],
            raw: true,
            nest: true
        });
        return genres;
    } catch (error) {
        throw new Error('Lỗi khi lấy phân bố thể loại: ' + error.message);
    }
};

// Lấy top phim xem nhiều nhất
exports.getTopSeasons = async () => {
    try {
        const histories = await WatchHistory.findAll({
            include: [{
                model: Episode,
                as: 'episode',
                attributes: ['seasonId'],
                required: true
            }],
            attributes: [
                [db.sequelize.col('episode.seasonId'), 'seasonId'],
                [db.sequelize.fn('COUNT', db.sequelize.col('WatchHistory.id')), 'viewCount']
            ],
            group: ['episode.seasonId'],
            order: [[db.sequelize.literal('viewCount'), 'DESC']],
            limit: 10,
            raw: true
        });

        const seasonIds = histories.map(h => Number(h.seasonId));
        const seasons = await Season.findAll({
            where: { id: seasonIds },
            attributes: ['id', 'title', 'movieId'],
            include: [
                {
                    model: Movie,
                    attributes: ['id', 'title']
                }
            ],
            raw: true,
            nest: true
        });

        return histories.map(h => {
            const season = seasons.find(s => Number(s.id) === Number(h.seasonId));
            return {
                seasonId: Number(h.seasonId),
                viewCount: Number(h.viewCount),
                title: season ? season.title : null,
                movieId: season ? season.movieId : null,
                movie: season && season.Movie ? season.Movie : null
            };
        });
    } catch (error) {
        throw new Error('Lỗi khi lấy top phim: ' + error.message);
    }
};

// Lấy top user xem nhiều nhất
exports.getTopUsers = async () => {
    try {
        const histories = await WatchHistory.findAll({
            attributes: [
                'userId',
                [db.sequelize.fn('COUNT', db.sequelize.col('id')), 'viewCount']
            ],
            group: ['userId'],
            order: [[db.sequelize.literal('viewCount'), 'DESC']],
            limit: 10,
            raw: true
        });

        const users = await User.findAll({
            where: { id: { [Op.in]: histories.map(h => h.userId) } },
            attributes: ['id', 'username', 'email']
        });

        return histories.map(h => ({
            userId: h.userId,
            viewCount: h.viewCount,
            user: users.find(u => u.id === h.userId)
        }));
    } catch (error) {
        throw new Error('Lỗi khi lấy top users: ' + error.message);
    }
};

// Lấy top phim được yêu thích nhất
exports.getTopFavoriteMovies = async () => {
    try {
        const favorites = await Favorite.findAll({
            attributes: [
                'seasonId',
                [db.sequelize.fn('COUNT', db.sequelize.col('seasonId')), 'favoriteCount']
            ],
            group: ['seasonId'],
            order: [[db.sequelize.literal('favoriteCount'), 'DESC']],
            limit: 10,
            raw: true
        });

        const seasons = await Season.findAll({
            where: { id: { [Op.in]: favorites.map(f => f.seasonId) } },
            attributes: ['id', 'title']
        });

        return favorites.map(f => ({
            ...f,
            season: seasons.find(s => s.id === f.seasonId)
        }));
    } catch (error) {
        throw new Error('Lỗi khi lấy top favorite movies: ' + error.message);
    }
};

// Lấy top phim rating cao nhất
exports.getTopRatedSeasons = async () => {
    try {
        const ratings = await Rating.findAll({
            attributes: [
                'seasonId',
                [db.sequelize.fn('AVG', db.sequelize.col('rating')), 'avgRating']
            ],
            group: ['seasonId'],
            order: [[db.sequelize.literal('avgRating'), 'DESC']],
            limit: 10,
            raw: true
        });

        const seasons = await Season.findAll({
            where: { id: ratings.map(r => r.seasonId) },
            attributes: ['id', 'title']
        });

        return ratings.map(r => ({
            ...r,
            season: seasons.find(s => s.id === r.seasonId)
        }));
    } catch (error) {
        throw new Error('Lỗi khi lấy top rated seasons: ' + error.message);
    }
};

// Lấy user mới nhất
exports.getNewestUsers = async () => {
    try {
        return await User.findAll({
            order: [['createdAt', 'DESC']],
            limit: 10,
            attributes: ['id', 'username', 'email', 'createdAt'],
            raw: true
        });
    } catch (error) {
        throw new Error('Lỗi khi lấy newest users: ' + error.message);
    }
};

// Lấy phim mới nhất
exports.getNewestSeasons = async () => {
    try {
        return await Season.findAll({
            order: [['createdAt', 'DESC']],
            limit: 10,
            attributes: ['id', 'title', 'createdAt'],
            raw: true
        });
    } catch (error) {
        throw new Error('Lỗi khi lấy newest seasons: ' + error.message);
    }
};

// Lấy tỷ lệ user theo vai trò
exports.getUserRoleDistribution = async () => {
    try {
        const roles = await User.findAll({
            attributes: [
                'role',
                [db.sequelize.fn('COUNT', db.sequelize.col('id')), 'count']
            ],
            group: ['role'],
            raw: true
        });
        return roles;
    } catch (error) {
        throw new Error('Lỗi khi lấy user role distribution: ' + error.message);
    }
};

// Lấy số lượng comment theo tháng
exports.getCommentsByMonth = async () => {
    try {
        const currentYear = new Date().getFullYear();
        const comments = await Comment.findAll({
            attributes: [
                [db.sequelize.fn('MONTH', db.sequelize.col('createdAt')), 'month'],
                [db.sequelize.fn('COUNT', db.sequelize.col('id')), 'count']
            ],
            where: {
                createdAt: {
                    [Op.gte]: new Date(currentYear, 0, 1),
                    [Op.lte]: new Date(currentYear, 11, 31)
                }
            },
            group: [db.sequelize.fn('MONTH', db.sequelize.col('createdAt'))],
            raw: true
        });

        const allMonths = Array.from({ length: 12 }, (_, i) => ({
            month: i + 1,
            count: 0
        }));
        comments.forEach(c => {
            allMonths[c.month - 1].count = parseInt(c.count);
        });
        return allMonths;
    } catch (error) {
        throw new Error('Lỗi khi lấy comments by month: ' + error.message);
    }
};

// Lấy tỷ lệ hoàn thành xem phim
exports.getCompletionRate = async () => {
    try {
        const totalEpisodes = await Episode.count();
        const completedViews = await WatchHistory.count({
            distinct: true,
            col: 'userId'
        });

        const completionRate = totalEpisodes > 0
            ? (completedViews / totalEpisodes * 100).toFixed(1)
            : 0;

        return {
            totalEpisodes,
            completedViews,
            completionRate
        };
    } catch (error) {
        throw new Error('Lỗi khi lấy tỷ lệ hoàn thành: ' + error.message);
    }
};