/**
 * Created by giggles on 11/25/17.
 */


const Koa = require('koa2');
const Session = require("koa-session2");
const log = require('./src/log');

const db = require('./src/db')(() => {

  const gameDb = db.games();
  const playerDb = db.players();
  const gameManager = require('./src/game_manager')(gameDb, playerDb, log);

  const app = new Koa();

  app.use(async(ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
  });

  app.use(async(ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
  });

  app.use(Session({
    key: "BOBDOLEWUZHERE",
    //  secure: true,
    httpOnly: true,
    overwrite: true,
  //  signed: true
  }));

  app.on('error', (err, ctx) => {
    log.error('server error', err, ctx)
  });
  app.on('error', err => {
    log.error('server error', err);
  });

  require('./src/routes/session.js')(app, db, log, gameManager);
  require('./src/routes/game.js')(app, db, log, gameManager);

  app.listen(8080);

})
