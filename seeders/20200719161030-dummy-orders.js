'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      "Orders", 
      [
        {
          userId: 1,
          date: new Date(),
          total: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          date: new Date(),
          total: 26,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          date: new Date(),
          total: 60,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          date: new Date(),
          total: 90,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 5,
          date: new Date(),
          total: 144,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("Orders", null, {});
  }
};
