'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.STRING,
    total: DataTypes.FLOAT,
    status: DataTypes.STRING,
  }, {});
  Order.associate = function(models) {
  };
  return Order;
};