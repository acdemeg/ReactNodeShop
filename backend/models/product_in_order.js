'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product_in_Order = sequelize.define('Product_in_Order', {
    count: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
  }, {});
  Product_in_Order.associate = function(models) {
  };
  return Product_in_Order;
};