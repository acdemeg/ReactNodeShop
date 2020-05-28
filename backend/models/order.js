'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.STRING,
    total: DataTypes.FLOAT,
    status: DataTypes.ENUM('Delivering', 'Done', 'Canceled'),
  }, {});
  Order.associate = function(models) {
  };
  return Order;
};