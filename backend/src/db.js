/**
 * Created by giggles on 11/25/17.
 */

const loki = require('lokijs');

let games = {};
let players = {};

const databaseInitialize = (callback) => {
  games = db.getCollection("games");
  if (games === null) {
    games = db.addCollection("games");
  }
  players = db.getCollection("players");
  if (players === null) {
    players = db.addCollection("players");
  }
  callback();
}
let db;
module.exports = (callback) => {
  db = new loki('tb.json', {
    autoload: true,
    autoloadCallback: () => databaseInitialize(callback),
    autosave: true,
    autosaveInterval: 4000
  })
  return {
    games: () => games,
    players: () => players,
  }
};
