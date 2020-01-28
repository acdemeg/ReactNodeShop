const Router = require('koa-router');
//const debug = require('debug')('app:router');
//const convert = require('koa-convert');
//const KoaBody = require('koa-body');
//const product = require('../models/products');
//const orders = require('../models/orders');
//const users = require('../models/users');

const router = new Router();
//const koaBody = convert(KoaBody());

/**
 *      set api for products
 */

router.get('/api/products', async ctx => {
  console.log('Getting products');
  ctx.body = 'await products.getAll()';
});
/*.get('/product/:id', async (ctx, next) => {
    let result = await product.get(ctx.params.id);
    if (result) {
      ctx.body = result
    }
    else {
      ctx.status = 204
    }{
  })
  .post('/product', koaBody, async (ctx, next) => {
    ctx.status = 201;
    ctx.body = await product.create(ctx.request.body)
  })
  .put('/product/:id', koaBody, async (ctx, next) => {
    ctx.status = 204;
    await product.update(ctx.params.id, ctx.request.body);
   })
  .delete('/product/:id', async (ctx, next) => 
    ctx.status = 204;
    await product.delete(ctx.params.id);
  });*/

/**
 *      set api for orders
 */

router.get('/api/orders', async ctx => {
  console.log('Getting orders');
  ctx.body = 'await orders.getAll()';
});

/**
 *      set api for users
 */

router.get('/api/users', async ctx => {
  console.log('Getting user');
  ctx.body = 'await users.getAll()';
});

module.exports = router;
