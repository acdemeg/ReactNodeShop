const Sequelize = require('sequelize');
const debug = require('debug')('app:db');

const sequelize = new Sequelize('lntsunday', 'postgres', 'lineate4@Sun', {
  dialect: 'postgres',
  host: '172.17.0.1',
  port: '5433',
  define: { timestamps: false },
});

sequelize
  .authenticate()
  .then(() => {
    debug('Connection has been established successfully.');
  })
  .catch(err => {
    debug(`Unable to connect to the database:,  ${err}`);
  });

module.exports = sequelize;
