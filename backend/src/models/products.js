const debug = require('debug')('app:products');
const Sequelize = require('sequelize');
const db = require('../database');

const products = {
  getAll: async () => {
    return db.Products;
  },
  addProduct: async () => {
    return 'addProduct';
  },
  getProductInfo: async id => {
    return 'getProductInfo';
  },
  updateProduct: async id => {
    return 'updateProduct';
  },
  deleteProduct: async id => {
    return 'deleteProduct';
  },
};

const Product = db.sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  pathImage: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = products;
