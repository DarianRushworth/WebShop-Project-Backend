'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      "Products", 
      [
        {
          name: "Pens",
          imageUrl: "",
          price: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Paint",
          imageUrl: "",
          price: 5,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "NotePad",
          imageUrl: "",
          price: 3,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Deodrant",
          imageUrl: "",
          price: 3,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Shampoo",
          imageUrl: "",
          price: 6,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Toothpaste",
          imageUrl: "",
          price: 4,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Headset",
          imageUrl: "",
          price: 87,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Portable USB Charger",
          imageUrl: "",
          price: 20,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Marley Feel Free Sub-Houfer",
          imageUrl: "",
          price: 57,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
    
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("Products", null, {});
  }
};
