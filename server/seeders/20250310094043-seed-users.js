'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        email: 'john@example.com',
        password: bcrypt.hashSync('password123', 10), // Use hashSync
        address: '123 Street, City',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: bcrypt.hashSync('securepass', 10), // Use hashSync
        address: '456 Avenue, City',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
