const debug = require('debug')('app:orders');
const DB = require('../database');

const orders = {
  getOrdersOfUser: async id => {
    // for each order need get good list
    return await DB.Order.findAll({
      include: [{ model: DB.Product }],
      where: { userId: id },
    });
  },
  updateOrderStatus: async () => {
    return 'updateOrderStatus';
  },
  getOrder: async orderId => {
    return await DB.Order.findOne({ where: { id: orderId }, raw: true });
  },
  createOrder: async (order) => {
    return await DB.Order.create({
      userId: order.userId,
      total: order.total,
    })
    .then(orderRecord => {
      order.products.forEach(element => {
        element.orderId = orderRecord.id;
      });

      DB.ProductsInOrder.bulkCreate(order.products)
      })
    .then(() => 'succses')

    },
};

module.exports = orders;
