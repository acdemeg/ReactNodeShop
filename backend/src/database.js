'use strict';

const Sequelize = require('sequelize');
const debug = require('debug')('app:db');
const config = require('../config/config.json');

const db = new Sequelize(config[process.env.NODE_ENV].url, {
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

db.authenticate()
  .then(() => {
    debug('Connection has been established successfully.');
  })
  .catch(err => {
    debug(`Unable to connect to the database:,  ${err}`);
  });

module.exports = db;
