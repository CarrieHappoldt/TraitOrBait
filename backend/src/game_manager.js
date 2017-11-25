const curry = require('curry');
const uuid = require('uuid');

const filter = (inObj) => {
  if (!inObj)
    throw new Error('not found')
  const {$loki, meta, ...obj} = inObj;
  return obj;
}

const chars = 'ABCDEFGHJKMNOPQRSTUVWXYZ123456789abcdefghjkmnopqrstuvwyxz';

function* genName() {
  while (true) {
    let str = "";
    for (let i = 0; i < 6; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    yield str;
  }
}

const makeName = genName();

const create = (gameDb, log) => {
  let id = undefined;
  while (true) {
    id = makeName.next().value;
    if (!gameDb.findOne({
        id
      })) {
      gameDb.insert({
        id,
        players: [],
        questions: []
      });
      break;
    }
  }

  const game = gameDb.findOne({
    id
  });
  log.debug('game:', game);
  return filter(game);
}

const get = (gameDb, log, id) => filter(gameDb.findOne({
  id
}));

const join = (gameDb, log, id, playerId) => {
  const game = gameDb.findOne({
    id
  });
  if (!game)
    throw new Error('game not found', id);
  game.players.unshift(playerId);
  gameDb.update(game);
  return get(gameDb, log, game.id);
}

const createPlayer = (playerDb, log, playerName) => {
  let playerId = uuid.v4();
  let player = undefined;
  while (true) {
    player = playerDb.findOne({
      id: playerId
    });
    if (!player) {
      break;
    }
    playerId = uuid.v4();
  }

  playerDb.insert({
    id: playerId,
    name: playerName
  });
  return filter(playerDb.findOne({
    id: playerId
  }));
}


module.exports = (gameDb, playerDb, log) => {
  return {
    get: curry.to(3, get)(gameDb, log),
    create: () => create(gameDb, log),
    join: curry.to(4, join)(gameDb, log),
    createPlayer: curry.to(3, createPlayer)(playerDb, log)
  }
}
