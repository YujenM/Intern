'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('userRoles', [
      { user_id: 1, role_id: 1, createdAt: new Date(), updatedAt: new Date() }, // John Doe -> SuperAdmin
      { user_id: 2, role_id: 3, createdAt: new Date(), updatedAt: new Date() }  // Jane Smith -> User
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('userRoles', null, {});
  }
};
