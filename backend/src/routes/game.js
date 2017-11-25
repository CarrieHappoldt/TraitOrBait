const Router = require('koa-router');
const curry = require('curry');
const uuid = require('uuid');
const koaBody = require('koa-body');


const router = new Router({
  prefix: "/game"
});

const create = async(db, log, gameManager, ctx, next) => {
  let newGame = gameManager.create();
  log.info('Creating game', newGame);
  if (ctx.request.body.player_name) {
    const player = gameManager.createPlayer(ctx.request.body.player_name);
    newGame = gameManager.join(newGame.id, player.id);
  }
  ctx.body = newGame;
}

const get = async(db, log, gameManager, ctx, next) => {
  const gameId = ctx.params.id;
  log.debug('Getting game status for game', gameId);
  ctx.body = gameManager.get(gameId);
}

module.exports = (app, db, log, gameManager) => {
  router.get('/:id', curry.to(5, get)(db, log, gameManager));
  router.post('/', koaBody(), curry.to(5, create)(db, log, gameManager));
  app.use(router.routes())
};
