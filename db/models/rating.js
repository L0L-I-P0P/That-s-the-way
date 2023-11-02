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
      rating: DataTypes.FLOAT,
      user_ID: DataTypes.INTEGER,
      route_ID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Rating',
    }
  );
  return Rating;
};

