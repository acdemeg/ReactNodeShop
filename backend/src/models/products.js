const debug = require('debug')('app:products');
const Sequelize = require('sequelize');
const db = require('../database');

const products = {
  getAll: async () => {
    return await Product.findAll({ raw: true });
  },
  addProduct: async () => {
    return "await Product.bulkCreate([Array])";
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
  nameProduct: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  count: {
    type: Sequelize.INTEGER,
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


