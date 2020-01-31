const debug = require('debug')('app:products');
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

module.exports = products;
