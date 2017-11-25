/**
 * Created by giggles on 11/25/17.
 */

const loki = require('lokijs');

const db = new loki('tb.json');

module.exports = db;