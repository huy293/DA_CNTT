const { Notification } = require("../models");
const { Op } = require("sequelize");

// Test endpoint để tạo thông báo cho user
exports.createTestNotification = async (req, res) => {
  try {
    const testNotification = await Notification.create({
      message: "Thông báo test cho user - " + new Date().toLocaleString(),
      forRole: "user",
      time: new Date()
    });
    res.status(201).json(testNotification);
  } catch (err) {
    res.status(500).json({ message: "Không thể tạo thông báo test", error: err.message });
  }
};

// Lấy thông báo cho user
exports.getUserNotifications = async (req, res) => {
  try {
    const notifications = await Notification.findAll({
      where: { forRole: 'user' },
      order: [['createdAt', 'DESC']],
      limit: 50
    });
    res.json(notifications);
  } catch (err) {
    console.error("Error fetching user notifications:", err);
    res.status(500).json({ message: "Không thể lấy thông báo" });
  }
};

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

// Tạo thông báo test cho user
exports.createTestUserNotification = async (req, res) => {
  try {
    const testNotification = await Notification.create({ 
      message: "Đây là thông báo test cho user!",
      forRole: "user"
    });
    res.status(201).json(testNotification);
  } catch (err) {
    console.error("Error creating test notification:", err);
    res.status(500).json({ message: "Không thể tạo thông báo test" });
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