'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      "OrderProducts", 
      [
        {
          orderId: 1,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          orderId: 1,
          productId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          orderId: 1,
          productId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          orderId: 2,
          productId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          orderId: 2,
          productId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          orderId: 3,
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          orderId: 3,
          productId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          orderId: 4,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          orderId: 4,
          productId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          orderId: 5,
          productId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          orderId: 5,
          productId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("OrderProducts", null, {});
  }
};
