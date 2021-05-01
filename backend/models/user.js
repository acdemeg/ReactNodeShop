'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    balance: DataTypes.FLOAT,
    password: DataTypes.STRING,
    role: DataTypes.ENUM('USER', 'ADMIN'),
    imagePath: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
  };
  return User;
};
