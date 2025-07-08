const { WatchHistory, Episode, Season, Movie, User } = require('../models');
const { Op } = require('sequelize');

// 1. Tạo mới hoặc cập nhật lịch sử xem phim
exports.createWatchHistory = async (userId, episodeId = null) => {
  if (!userId || !episodeId) {
    throw new Error('User ID and Episode ID are required');
  }
  try {
    // Luôn tạo mới bản ghi lịch sử
    const history = await WatchHistory.create({ userId, episodeId });
    return history;
  } catch (error) {
    console.error("Error in createWatchHistory service:", error);
    throw new Error('Error creating watch history');
  }
};

// 2. Lấy lịch sử xem phim của người dùng (bao gồm thông tin về Season)
exports.getWatchHistoryByUser = async (userId, page = 1) => {
  try {
    const limit = 20; // Lấy 20 mục mỗi trang
    const offset = (page - 1) * limit;

    const { count, rows } = await WatchHistory.findAndCountAll({
      where: { userId },
      limit,
      offset,
      include: [
        {
          model: Episode,
          as: 'episode',
          attributes: ['id', 'title', 'episode_number'],
          include: [
            {
              model: Season,
              as: 'Season',
              attributes: ['id', 'title', 'season_number', 'poster_url'],
              include: [
                {
                  model: Movie,
                  as: 'Movie',
                  attributes: ['id', 'title', 'type']
                }
              ]
            },
          ],
        },
      ],
      order: [['updatedAt', 'DESC']],
      distinct: true
    });

    return {
      history: rows,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    };
  } catch (error) {
    throw new Error('Error retrieving watch history');
  }
};

// 3. Xóa lịch sử xem phim
exports.deleteWatchHistory = async (historyId) => {
  try {
    const deletedHistory = await WatchHistory.destroy({
      where: { id: historyId },
    });
    return deletedHistory;
  } catch (error) {
    throw new Error('Error deleting watch history');
  }
};

// 4. Xóa toàn bộ lịch sử xem của người dùng
exports.clearWatchHistory = async (userId) => {
  try {
    await WatchHistory.destroy({
      where: { userId },
    });
  } catch (error) {
    throw new Error('Error clearing watch history');
  }
};

// 5. Xóa nhiều mục lịch sử xem của người dùng
exports.bulkDeleteWatchHistory = async (userId, historyIds) => {
  try {
    await WatchHistory.destroy({
      where: {
        id: {
          [Op.in]: historyIds,
        },
        userId, // Chỉ xóa lịch sử của đúng người dùng
      },
    });
  } catch (error) {
    throw new Error('Error bulk deleting watch history');
  }
};

// 6. Cập nhật tiến độ phim bộ
exports.updateWatchHistory = async (historyId, episodeId) => {
  try {
    const updatedHistory = await WatchHistory.update(
      { episodeId },
      { where: { id: historyId } }
    );
    return updatedHistory;
  } catch (error) {
    throw new Error('Error updating watch history');
  }
};

// 7. Thống kê lịch sử xem phim (bao gồm thông tin về Season)
exports.getWatchHistoryStats = async (userId) => {
  try {
    const stats = await WatchHistory.findAll({
      where: { userId },
      include: [
        {
          model: Episode,
          as: 'episode',
          attributes: ['id', 'title'],
          include: [
            {
              model: Season,
              as: 'season',
              attributes: ['id', 'title', 'seasonNumber'], // Thông tin mùa phim
            },
          ],
        },
      ],
    });

    // Thống kê thể loại, số lượng phim đã xem, v.v.
    return stats;
  } catch (error) {
    throw new Error('Error retrieving watch history stats');
  }
};
