'use strict';

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.STRING,
    total: DataTypes.FLOAT,
    status: DataTypes.STRING,
    orderCode: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
   Order.hasOne(models.User);
   Order.hasMany(models.Product);
  };
  return Order;
};
