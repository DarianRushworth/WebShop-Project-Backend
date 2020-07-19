'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users", [
        {
          firstName: "Kristina",
          lastName: "Matthews",
          address: "148 oud-Loosdrechtsedijk",
          email: "Kristina2308@gmail.com",
          phone: 96527,
          password: "Darian0608",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Tori",
          lastName: "Heidmann",
          address: "21 Tuscany Villas",
          email: "ToriSFX@gmail.com",
          phone: 98756,
          password: "BitchPlease",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Darian",
          lastName: "Rushworth",
          address: "148 oud-Loosdrechtsedijk",
          email: "Darianerrolrushworth@gmail.com",
          phone: 96448,
          password: "WhenYouKnowYouKnow",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Jason",
          lastName: "Miller",
          address: "14 Winkle Way",
          email: "Jmiller132@gmail.com",
          phone: 67267,
          password: "HydroBudzISBest",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Spiro",
          lastName: "Kostris",
          address: "203 Beach Belavade",
          email: "SpiroGreekGod@gmail.com",
          phone: 36025,
          password: "HackMeIDearYou",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  }
};
