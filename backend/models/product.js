'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    nameProduct: DataTypes.STRING,
    count: DataTypes.INTEGER,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    pathImage: DataTypes.STRING,
  }, {});
  Product.associate = function(models) {
  };
  return Product;
};