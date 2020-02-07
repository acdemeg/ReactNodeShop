const debug = require('debug')('app:orders');
const Sequelize = require('sequelize');
const db = require('../database');

const orders = {
  getOrdersOfUser: async () => {
    return 'getOrdersOfUser';
  },
  updateOrderStatus: async () => {
    return 'updateOrderStatus';
  },
  getOrder: async id => {
    return 'getOrder';
  },
  createOrder: async id => {
    return  "createOrder";
  },
};

const Order = db.sequelize.define('orders', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  nameProduct: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  count: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  total: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  pathImage: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = orders;

