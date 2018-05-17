// Update with your config settings.
const { PG_CONNECTION } = require('./constants');

module.exports = {

  development: {
    client: 'pg',
    connection: PG_CONNECTION
  },

  staging: {
    client: 'pg',
    connection: PG_CONNECTION,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: PG_CONNECTION,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
