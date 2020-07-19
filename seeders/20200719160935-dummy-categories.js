'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   queryInterface.bulkInsert(
     "Categories",
     [
       {
        name: "Stationary",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: "Toiletries",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: "Electronics",
        createdAt: new Date(),
        updatedAt: new Date()
       }
     ]) 
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("Categories", null, {});
  }
};
