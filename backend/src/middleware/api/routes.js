const Router = require('koa-router');
const debug = require('debug')('app:router');
const convert = require('koa-convert');
const KoaBody = require('koa-body');
const products = require('../../models/products');
const orders = require('../../models/orders');
const users = require('../../models/users');

const router = new Router();
const koaBody = convert(KoaBody());

debug(`in router`);

router
  //**users endpoints */
  .get('/api/users', async ctx => {
    ctx.body = await users.getAll();
  })
  .get('/api/users/profile', async ctx => {
    ctx.body = await users.getProfile();
  })
  .post('/api/users/login', async ctx => {
    ctx.body = await users.loginUser();
  })
  .post('/api/users/register', async ctx => {
    ctx.body = await users.registerUser();
  })
  .get('/api/users/id', async ctx => {
    ctx.body = await users.getProfileOfUser();
  })
  .put('/api/users/id', async ctx => {
    ctx.body = await users.updateProfileOfUser();
  })
  //**products endpoints */
  .post('/api/products', async ctx => {
    ctx.body = await products.addProduct();
  })
  .get('/api/products', async ctx => {
    ctx.body = await products.getAll();
  })
  .get('/api/products/id', async ctx => {
    ctx.body = await products.getProductInfo();
  })
  .put('/api/products/id', async ctx => {
    ctx.body = await products.updateProduct();
  })
  .delete('/api/products/id', async ctx => {
    ctx.body = await products.deleteProduct();
  })
  //**orders endpoints */
  .post('/api/orders', async ctx => {
    ctx.body = await orders.createOrder();
  })
  .get('/api/orders/id', async ctx => {
    ctx.body = await orders.getOrder();
  })
  .put('/api/orders/id', async ctx => {
    ctx.body = await orders.updateOrderStatus();
  })
  .get('/api/users/id/orders', async ctx => {
    ctx.body = await orders.getOrdersOfUser();
  });

module.exports = router;
