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
  updateOrderStatus: async (id, obj) => {
    let order = await orders.getOrder(id);
    order.status = (obj.status === 'Cancel') ? 'Canceled' : 'Done';
    await order.save();
    return 'succses updateOrderStatus';
  },
  getOrder: async orderId => {
    return await DB.Order.findOne({ where: { id: orderId }});
  },
  createOrder: async order => {
    return await DB.Order.create({
      userId: order.userId,
      total: order.total,
    })
      .then(orderRecord => {
        order.products.forEach(element => {
          element.orderId = orderRecord.id;
        });

        DB.ProductsInOrder.bulkCreate(order.products);
      })
      .then(() => 'succses createOrder');
  },
};

module.exports = orders;
