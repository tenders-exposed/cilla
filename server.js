const router = require('koa-better-router')().loadMethods();

router.get('/', (ctx, next) => {
  ctx.body = `Hello world! Prefix: ${ctx.route.prefix}`;
  return next();
})

// The server
const Koa = require('koa'); // Koa v2
const app = new Koa();

app.use(router.middleware());

app.listen(2358, () => {
  console.log('Started!');
})
