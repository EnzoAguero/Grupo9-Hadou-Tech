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
        foreignKey :'id',
        onDelete : 'cascade'
      }),
      Product.hasMany(models.Category,{
        as : 'categories',
        foreignKey :'id',
        onDelete : 'cascade'
      }),
      Product.hasMany(models.Mark,{
        as : 'marks',
        foreignKey :'id',
        onDelete : 'cascade'
      })
    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    cuotas: DataTypes.INTEGER,
    description : DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
