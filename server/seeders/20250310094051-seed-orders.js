'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('orders', [
      {
        user_id: 1, // John Doe
        order_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2, // Jane Smith
        order_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('orders', null, {});
  }
};
