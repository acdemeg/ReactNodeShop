const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const err = require('./api/error');
const router = require('./api/routes');
const debug = require('debug')('app');
const send = require('koa-send');

const staticDir = path.resolve(__dirname, '..', '..', 'public');
const app = new Koa();

app.use(err);
app.use(serve(staticDir));
app.use(router.routes());
app.use(router.allowedMethods());
app.use(async (ctx) => await send(ctx, 'index.html', {root: staticDir}) );

app.listen(3000, () => {
  console.log('Server listen on localhost:80');
});
   