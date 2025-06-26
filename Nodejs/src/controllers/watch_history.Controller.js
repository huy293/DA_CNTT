const watchHistoryService = require('../services/watch_history.Service');

// 1. Tạo mới lịch sử xem phim
exports.createWatchHistory = async (req, res) => {
  const userId = req.user.id;
  const { episodeId } = req.body;

  try {
    const newHistory = await watchHistoryService.createWatchHistory(userId, episodeId);
    return res.status(201).json({ message: 'Watch history created successfully', data: newHistory });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 2. Lấy lịch sử xem phim của người dùng
exports.getWatchHistoryByUser = async (req, res) => {
  const { userId } = req.params;
  const page = parseInt(req.query.page, 10) || 1;

  try {
    const historyData = await watchHistoryService.getWatchHistoryByUser(userId, page);
    return res.status(200).json({ data: historyData });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 3. Xóa lịch sử xem phim
exports.deleteWatchHistory = async (req, res) => {
  const { historyId } = req.params;

  try {
    const deletedHistory = await watchHistoryService.deleteWatchHistory(historyId);
    if (deletedHistory) {
      return res.status(200).json({ message: 'Watch history deleted successfully' });
    }
    return res.status(404).json({ message: 'Watch history not found' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 4. Xóa toàn bộ lịch sử xem phim của người dùng
exports.clearWatchHistory = async (req, res) => {
  const userId = req.user.id;

  try {
    await watchHistoryService.clearWatchHistory(userId);
    return res.status(200).json({ message: 'Watch history cleared successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 5. Xóa nhiều mục lịch sử
exports.bulkDeleteWatchHistory = async (req, res) => {
  const { historyIds } = req.body; // Expect an array of IDs
  const userId = req.user.id;

  if (!historyIds || !Array.isArray(historyIds) || historyIds.length === 0) {
    return res.status(400).json({ message: 'History IDs must be a non-empty array' });
  }

  try {
    await watchHistoryService.bulkDeleteWatchHistory(userId, historyIds);
    return res.status(200).json({ message: 'Selected watch history items deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 6. Cập nhật tiến độ phim bộ
exports.updateWatchHistory = async (req, res) => {
  const { historyId } = req.params;
  const { episodeId } = req.body;

  try {
    const updatedHistory = await watchHistoryService.updateWatchHistory(historyId, episodeId);
    return res.status(200).json({ message: 'Watch history updated successfully', data: updatedHistory });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 7. Thống kê lịch sử xem phim của người dùng
exports.getWatchHistoryStats = async (req, res) => {
  const { userId } = req.params;

  try {
    const stats = await watchHistoryService.getWatchHistoryStats(userId);
    return res.status(200).json({ data: stats });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};