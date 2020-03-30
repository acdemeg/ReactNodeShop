const Router = require('koa-router');
const debug = require('debug')('app:router');
const koaBody = require('koa-body');
const products = require('../../controllers/products');
const orders = require('../../controllers/orders');
const users = require('../../controllers/users');

const router = new Router();

router
  //**products endpoints */
  .get('/api/products', async ctx => {
    ctx.body = await products.getAll();
  })
  .post('/api/products', koaBody(), async ctx => {
    ctx.body = await products.addProduct();
  })
  .get('/api/products/:id', async ctx => {
    ctx.body = await products.getProductInfo();
  })
  .put('/api/products/:id', koaBody(), async ctx => {
    ctx.body = await products.updateProduct();
  })
  .delete('/api/products/:id', async ctx => {
    ctx.body = await products.deleteProduct();
  })
  //**users endpoints */
  .get('/api/users', async ctx => {
    ctx.body = await users.getAll();
  })
  .post('/api/users/login', koaBody(), async ctx => {
    ctx.body = await users.loginUser(ctx.request.body);
  })
  .post('/api/users/register', koaBody(), async ctx => {
    ctx.body = await users.registerUser(ctx.request.body);
  })
  .get('/api/users/:id', async ctx => {
    ctx.body = await users.getProfileOfUser(ctx.params.id);
  })
  .put('/api/users/:id', koaBody(), async ctx => {
    ctx.body = await users.updateProfileOfUser();
  })
  //**orders endpoints */
  .post('/api/orders', koaBody(), async ctx => {
    ctx.body = await orders.createOrder(ctx.request.body);
  })
  .get('/api/orders/:id', async ctx => {
    ctx.body = await orders.getOrder();
  })
  .patch('/api/orders/:id', koaBody(), async ctx => {
    ctx.body = await orders.updateOrderStatus(ctx.params.id, ctx.request.body);
  })
  .get('/api/users/:id/orders', async ctx => {
    ctx.body = await orders.getOrdersOfUser(ctx.params.id);
  });

module.exports = router;
