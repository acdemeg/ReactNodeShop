const debug = require('debug')('app:orders');
const { Order, ProductInOrder, Product } = require('../../models');
const sequelize = require('../database');

const orders = {
  getAll: async () => {
    const orders = await Order.findAll()
      .catch(err => `can't get orders ${err}`);

      if(orders.length){
        const allProductsAllOrders = await ProductInOrder.findAll(
          { where: { orderId: orders.map(v => v.id) }}
          )
          .catch(
            err => `can't find products for orders ${err}`,
          );
  
        const products = await Product.findAll(
          { where: { id: allProductsAllOrders.map(v => v.productId) }}
          )
          .catch(
            err => `can't get products ${err}`,
          );  
  
        return orders.map(order => {
          return {
            id: order.id,
            userId: order.userId,
            total: order.total,
            status: order.status,
            productsInOrder: allProductsAllOrders.filter(v => v.orderId === order.id),
            products: products.filter(
              v => allProductsAllOrders.filter(v => v.orderId === order.id)
                    .find(el => el.productId === v.id)),
          }
        })
      } 
      return orders;
  },
  updateOrderStatus: async (orderId, obj) => {
    const [res] = await Order.update({ status: obj.status }, 
      { where: { id: orderId } })
    .catch(
      err => `can't update order status ${err}`,
    );
    if (res) {
      return 'succses';
    }
    return 'error';
  },
  getOrder: async orderId => {
    const order = await Order.findOne({ where: { id: orderId }})
      .catch(err => `can't find order with id = ${orderId} ${err}`);

      if(order){
        const productsInOrder = await ProductInOrder.findAll(
          { where: { orderId: order.id }}
          )
          .catch(
            err => `can't find products for orders ${err}`,
          );
  
        const products = await Product.findAll(
          { where: { id: productsInOrder.map(v => v.productId) }}
          )
          .catch(
            err => `can't get products ${err}`,
          );  

        return {
          id: order.id,
          userId: order.userId,
          total: order.total,
          status: order.status,
          productsInOrder: productsInOrder,
          products: products,
        }

      } 
      return order;
  },
  updateProductCount: async (productId, newCount) => {
    const [res] = await Product.update({ 
      count: sequelize.literal(`count - ${newCount}`) 
    }, 
    { where: { id: productId } })
    .catch(
      err => `can't update order count ${err}`,
    );
    if (res) {
      return 'succses';
    }
    return 'error';
  },
  createOrder: async order => {
    return await Order.create({
      userId: order.userId,
      total: order.total,
    })
      .then(orderRecord => {
        order.products.forEach(v => {
          v.orderId = orderRecord.id;
          orders.updateProductCount(v.productId, v.count);
        });

        ProductInOrder.bulkCreate(order.products);
      })
      .then(() => 'succses')
      .catch(() => 'error');
  },
  deleteOrder: async orderId => {
    const res = await Order.destroy({
      where: {
        id: orderId,
      },
    })
      .then(res => (res ? res : `order with id = ${orderId} doesn't exist`))
      .catch(err => `reject delete order ${err}`);

    if (res) {
      return res;
    }
    return 'error delete orders';
  },
};

module.exports = orders;
