const { Notification } = require("../models");
const { Op } = require("sequelize");

exports.getAdminNotifications = async (req, res) => {
  try {
    const notifications = await Notification.findAll({
      where: { forRole: { [Op.in]: ['admin', 'moderator'] } },
      order: [['createdAt', 'DESC']],
      limit: 100
    });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: "Không thể lấy thông báo" });
  }
};

// Lấy thông báo cho vai trò bất kỳ
exports.getNotifications = async (req, res) => {
  try {
    const { role } = req.params;
    const notifications = await Notification.findAll({
      where: { forRole: role },
      order: [['createdAt', 'DESC']],
      limit: 100
    });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: "Không thể lấy thông báo" });
  }
};

// Tạo notification mới
exports.createNotification = async (req, res) => {
  try {
    const { message, forRole } = req.body;
    if (!message || !forRole) {
      return res.status(400).json({ message: "Thiếu nội dung hoặc vai trò nhận thông báo" });
    }
    const notification = await Notification.create({ message, forRole });
    res.status(201).json(notification);
  } catch (err) {
    res.status(500).json({ message: "Không thể tạo thông báo" });
  }
};

// Xóa notification
exports.deleteNotification = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Notification.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ message: "Không tìm thấy thông báo" });
    res.json({ message: "Đã xóa thông báo" });
  } catch (err) {
    res.status(500).json({ message: "Không thể xóa thông báo" });
  }
};