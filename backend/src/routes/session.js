const Router = require('koa-router');
const curry = require('curry');
const uuid = require('uuid');
const koaBody = require('koa-body');

const router = new Router({
  prefix: "/session"
});

const join = async(db, log, gameManager, ctx) => {
  ctx.session.id = uuid.v4();
  log.info('Creating session', ctx.session.id, 'name', ctx.request.body.name)

  const player = gameManager.createPlayer(ctx.session.id, ctx.request.body.name);
  ctx.body = gameManager.join(ctx.request.body.name, player.id);
}

const get = async(db, log, ctx, next) => {
  log.info('herro dr jones');
  ctx.body = 'bob dole';
}

module.exports = (app, db, log, gameManager) => {
  router.get('/', curry.to(4, get)(db, log));
  router.post('/join', koaBody(), curry.to(4, join)(db, log, gameManager));
  app.use(router.routes())
};
