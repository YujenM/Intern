'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('items', [
      {
        name: 'Laptop',
        description: 'High-end gaming laptop',
        price: 1200.99,
        stock: 10,
        user_id: 1, // Owned by John Doe
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Smartphone',
        description: 'Latest model smartphone',
        price: 799.49,
        stock: 25,
        user_id: 2, // Owned by Jane Smith
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('items', null, {});
  }
};
