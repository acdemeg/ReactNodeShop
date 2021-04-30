const debug = require('debug')('app:products');
const { Product } = require('../models');
const fs = require('fs');

const products = {
  getAll: async () => {
    return await Product.findAll()
      .catch(err => `can't get products ${err}`);
  },

  addProduct: async product => {
    return await Product.create({
      nameProduct: product.nameProduct,
      description: product.description,
      count: product.count,
      price: product.price,
      pathImage: product.pathImage,
      category: product.category,
      detailInfo: product.detailInfo
    })  
    .then(() => 'succses add product')
    .catch(() => 'create product error');
  },

  getProductInfo: async productId => {
    return await Product.findOne({ where: { id: productId }})
      .catch(err => `can't find product with id = ${productId} ${err}`);
  },

  updateProduct: async (productId, product) => {
    const [res] = await Product.update(
      { 
        nameProduct: product.nameProduct,
        description: product.description,
        count: product.count,
        price: product.price,
        pathImage: product.pathImage,
        category: product.category,
        detailInfo: product.detailInfo
      },
      { where: { id: productId } },
    ).catch(err => `can't update product with id = ${productId} ${err}`);

    return res;
  },

  deleteProduct: async productId => {
    const res = await Product.destroy({
      where: {
        id: productId,
      },
    })
      .then(res => (res ? res : `product with id = ${productId} doesn't exist`))
      .catch(err => `reject delete product ${err}`);

    if (res) {
      return res;
    }
    return 'error delete product';
  },
};

module.exports = products;
