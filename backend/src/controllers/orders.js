const debug = require('debug')('app:orders');
const DB = require('../database');

const orders = {
  getOrdersOfUser: async id => {
    // for each order need get good list
    return await DB.Order.findAll({
       include: [{ model: DB.Product,}], 
       where: { userId: id } })
  },
  updateOrderStatus: async () => {
    return 'updateOrderStatus';
  },
  getOrder: async orderId => {
     return await DB.Order.findOne({ where: { id: orderId }, raw: true });
  },
  createOrder: async () => {
    return await DB.Order.create({
      userId: 1,
      count: 1,
      total: 100,
    })
      .then(order => {
        DB.ProductsInOrder.create({
          productId: 1,
          orderId: order.id,
        });
      })
      .then(() => 'succsess');
  },
};

module.exports = orders;
