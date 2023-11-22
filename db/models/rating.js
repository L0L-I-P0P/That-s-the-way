'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Route }) {
      this.belongsTo(User, { foreignKey: 'user_ID' }),
        this.belongsTo(Route, { foreignKey: 'route_ID' });
    }
  }
  Rating.init(
    {
      rating: {
        defaultValue: 3,
        type: DataTypes.FLOAT,
      },
      user_ID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      route_ID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Routes',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Rating',
    }
  );
  return Rating;
};
