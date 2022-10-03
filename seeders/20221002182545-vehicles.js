'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert('Vehicles', [
      {
        brand: 'Ford',
        model: 'Ford KA',
        id: 'OIK-5485',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brand: 'Chevrolet',
        model: 'Onix',
        id: 'PJJ-5485',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Vehicles', null, {});
  }
};
