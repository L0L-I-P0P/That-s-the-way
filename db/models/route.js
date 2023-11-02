'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Rating }) {
      this.belongsTo(User, { foreignKey: 'user_ID' }),
        this.hasMany(Rating, { foreignKey: 'route_ID' });
    }
  }
  Route.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      route_from: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      route_to: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      route_length: {
        type: DataTypes.TEXT,
      },
      place: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      rating: {
        defaultValue: 5,
        type: DataTypes.FLOAT,
      },
      user_ID: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Route',
    }
  );
  return Route;
};

