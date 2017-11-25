const Router = require('koa-router');
const curry = require('curry');
const uuid = require('uuid');

const router = new Router({
  prefix: "/game"
});

const create = async(db, log, gameManager, ctx, next) => {
  const newGame = gameManager.create();
  log.info('Creating game', newGame);
  ctx.body = newGame;
}

const get = async(db, log, gameManager, ctx, next) => {
  const gameId = ctx.params.id;
  log.debug('Getting game status for game', gameId);
  ctx.body = gameManager.get(gameId);
}

module.exports = (app, db, log, gameManager) => {
  router.get('/:id', curry.to(5, get)(db, log, gameManager));
  router.post('/', curry.to(5, create)(db, log, gameManager));
  app.use(router.routes())
};
