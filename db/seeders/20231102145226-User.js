'use strict';
const bcrypt = require('bcrypt');
const { User, Route } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate(
      [
        {
          email: 'parviz@mail.ru',
          name: 'Парвиз',
          password: await bcrypt.hash('123', 10),
          Routes: [
            {
              title: 'Прогулка по Лиговскому',
              description: 'Очень крутой маршрут, но довольно сложный',
              route_from: 'Лиговский проспект 140',
              route_to: 'Невский проспект 140',
              place: 'Санкт-Петербург',
            },
            {
              title: 'Северный Питер',
              description: 'Крутые поворы и склоны довольно сложные',
              route_from: 'Энгельса проспект 120',
              route_to: 'Тореза проспект 20',
              place: 'Санкт-Петербург',
            },
          ],
        },
      ],
      { include: [Route] }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await User.destroy({ truncate: { cascade: true } });
  },
};
