const debug = require('debug')('app:users');
const { User, Order, Product, ProductInOrder } = require('../../models');

const users = {
  getAll: async () => {
    return await User.findAll({
      attributes: {
        exclude: ['password'],
      },
    }).catch(err => `can't get users ${err}`);
  },
  loginUser: async user => {
    const userDB = await User.findOne({ where: { email: user.email } })
    .catch(
      err => `user not found ${err}`,
    );

    if(userDB){
      if (userDB.password === user.password) {
        return {
          id: userDB.id,
          name: userDB.name,
          phone: userDB.phone,
          email: userDB.email,
          balance: userDB.balance,
          role: userDB.role,
          imagePath: userDB.imagePath,
        };
      }
      return 'wrong email or password'; 
    }
    
    return 'wrong email or password';

  },
  registerUser: async user => {
    return await User.create({
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: user.password,
    })
      .then(() => 'succses registration')
      .catch(err => {
        return `reject registration ${err}`;
      });
  },
  getOrdersOfUser: async id => {
    if(!id)
      return JSON.stringify([]);
      
    const orders = await Order.findAll({
      where: { userId: id },
    }).catch(
      err => `can't find orders for user with id = ${id} ${err}`,
    );

    if(orders.length){
      const productsInOrder = await ProductInOrder.findAll(
        { where: { orderId: orders.map(v => v.id) }}
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

      return orders.map(order => {
        return {
          id: order.id,
          userId: order.userId,
          total: order.total,
          status: order.status,
          orderCode: order.orderCode,
          productsInOrder: productsInOrder.filter(v => v.orderId === order.id),
          products: products.filter(
            v => productsInOrder.filter(v => v.orderId === order.id)
                  .find(el => el.productId === v.id)),
        }
      })
    } 
    return orders;
  },
  getProfileOfUser: async userId => {
    return await User.findOne({ 
      where: { id: userId }, 
      attributes: { exclude: ['password'] }
    })
    .catch(
      err => `can't find user with id = ${userId} ${err}`,
    );
  },
  updateProfileOfUser: async (userId, obj) => {
    const [res] = await User.update(
      { 
        name: obj.name,
        email: obj.email,
        phone: obj.phone,
        balance: obj.balance,
      },
      { where: { id: userId } },
    ).catch(err => `can't update profile with id = ${userId} ${err}`);

    return res;
  },
  deleteUser: async userId => {
    const res = await User.destroy({
      where: {
        id: userId,
      },
    })
      .then(res => (res ? res : `user with id = ${userId} doesn't exist`))
      .catch(err => `reject delete profile ${err}`);

    if (res) {
      return res;
    }
    return 'error delete user';
  },
};

module.exports = users;
