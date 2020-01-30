const debug = require('debug')('app:products');

debug(`in products`);


const products = {
  getAll: async () => {
    return 'Products';
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
