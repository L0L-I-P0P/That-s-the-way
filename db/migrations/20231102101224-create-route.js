'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Routes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      route_from: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      route_to: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      route_length: {
        type: Sequelize.TEXT,
      },
      place: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      rating: {
        defaultValue: 1,
        type: Sequelize.FLOAT,
      },
      user_ID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Routes');
  }






};