'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('order_items', [
      {
        quantity: 1,
        order_id: 1, // Order from John Doe
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quantity: 2,
        order_id: 2, // Order from Jane Smith
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('order_items', null, {});
  }
};
