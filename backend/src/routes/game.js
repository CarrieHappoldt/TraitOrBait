const Router = require('koa-router');
const curry = require('curry');
const uuid = require('uuid');
const koaBody = require('koa-body');


const router = new Router({
  prefix: "/game"
});

const create = async(db, log, gameManager, ctx, next) => {
  let newGame = gameManager.create();
  log.info('Creating game', newGame, ctx.request.body.player_name);
  let player;
  if (ctx.request.body.player_name) {
    player = gameManager.createPlayer(ctx.request.body.player_name);
    ctx.session.id = player.id;
    log.debug('Created', player);
    newGame = gameManager.join(newGame.id, player.id);
    log.debug('new game', newGame);
  }
  ctx.body = {
    game: newGame,
    player_id: player && player.id
  }
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
