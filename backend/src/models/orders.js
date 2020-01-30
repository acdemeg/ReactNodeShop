const debug = require('debug')('app:orders');

debug(`in orders`);

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
    return 'createOrder';
  },
};

module.exports = orders;
