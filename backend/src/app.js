require('dotenv').config();
const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const err = require('./middleware/error');
const router = require('./middleware/api/routes');
const debug = require('debug')('app');
const send = require('koa-send');

const staticDir = path.resolve(__dirname, '..', '..', 'public');
const app = new Koa();

app.use(serve(staticDir));
app.use(router.routes());
app.use(router.allowedMethods());
app.use(async ctx => await send(ctx, 'index.html', { root: staticDir }));
app.use(err);


app.listen(3001, () => {
  debug('Server listen on localhost:3001');
});
