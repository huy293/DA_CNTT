"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Notifications", [
      {
        message: "Chào mừng bạn đến với hệ thống quản trị!",
        forRole: "admin",
        time: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        message: "Có bản cập nhật mới cho hệ thống.",
        forRole: "admin",
        time: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        message: "Bạn có quyền truy cập vào trang moderator.",
        forRole: "moderator",
        time: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        message: "Chào mừng bạn đến với H² Movie! Hệ thống đã sẵn sàng phục vụ.",
        forRole: "user",
        time: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        message: "Phim mới 'Avengers: Endgame' đã được thêm vào hệ thống!",
        forRole: "user",
        time: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        message: "Bảo trì hệ thống vào 2h sáng mai, vui lòng lưu ý.",
        forRole: "user",
        time: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Notifications", null, {});
  },
}; 