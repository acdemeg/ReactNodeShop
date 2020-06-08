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
  .post('/api/products', koaBody({formLimit: '5mb', jsonLimit: '5mb'}), async ctx => {
    ctx.body = await products.addProduct(ctx.request.body);
  })
  .get('/api/products/:id', async ctx => {
    ctx.body = await products.getProductInfo(ctx.params.id);
  })
  .put('/api/products/:id', koaBody(), async ctx => {
    ctx.body = await products.updateProduct(ctx.params.id, ctx.request.body);
  })
  .delete('/api/products/:id', async ctx => {
    ctx.body = await products.deleteProduct(ctx.params.id);
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
  .get('/api/users/:id/orders', async ctx => {
    ctx.body = await users.getOrdersOfUser(ctx.params.id);
  })
  .put('/api/users/:id', koaBody(), async ctx => {
    ctx.body = await users.updateProfileOfUser(ctx.params.id, ctx.request.body);
  })
  .delete('/api/users/:id', async ctx => {
    ctx.body = await users.deleteUser(ctx.params.id);
  })
  //**orders endpoints */
  .get('/api/orders', async ctx => {
    ctx.body = await orders.getAll();
  })
  .get('/api/orders/:id', async ctx => {
    ctx.body = await orders.getOrder(ctx.params.id);
  })
  .post('/api/orders', koaBody(), async ctx => {
    ctx.body = await orders.createOrder(ctx.request.body);
  })
  .patch('/api/orders/:id', koaBody(), async ctx => {
    ctx.body = await orders.updateOrderStatus(ctx.params.id, ctx.request.body);
  })
  .delete('/api/orders/:id', async ctx => {
    ctx.body = await orders.deleteOrder(ctx.params.id);
  })

module.exports = router;
