'use strict';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('123456', 10);
    const users = [];

    // Tạo 10 người dùng với vai trò 'user'
    for (let i = 1; i <= 10; i++) {
      users.push({
        username: `user${i}`,
        email: `user${i}@example.com`,
        password: hashedPassword,
        role: 'user',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    // Tạo 5 người dùng với vai trò 'moderator'
    for (let i = 1; i <= 5; i++) {
      users.push({
        username: `moderator${i}`,
        email: `moderator${i}@example.com`,
        password: hashedPassword,
        role: 'moderator',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    // Tạo 3 người dùng với vai trò 'admin'
    for (let i = 1; i <= 3; i++) {
      users.push({
        username: `admin${i}`,
        email: `admin${i}@example.com`,
        password: hashedPassword,
        role: 'admin',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    return queryInterface.bulkInsert('Users', users, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
}; 