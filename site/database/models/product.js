'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.Image,{
        as : 'images',
        onDelete : 'cascade'
      })
    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    cuotas: DataTypes.INTEGER,
    mark: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};