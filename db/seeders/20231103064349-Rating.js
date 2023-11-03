'use strict';
const { User, Route, Rating } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const user = await User.findOne({ where: { email: 'parviz@mail.ru' } });
    const route = await Route.findOne({ where: { user_ID: user.id } });
    await Rating.create({
      rating: 5,
      user_ID: user.id,
      route_ID: route.id,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

