const { Pool } = require('pg')

module.exports = function(app) {
  const host = app.get('PH_HOST');
  const user = app.get('PG_USER');
  const password = app.get('PG_PASSWORD');
  const database = app.get('PG_DB');
  const idleTimeoutMillis = app.get('30000')
  const connectionTimeoutMillis = app.get('2000')

  /**
   * @TODO: Configuration Variables
   *
   *  Retrieve the necessary information to connect to Postgres
   *  For example: app.get('PG_DB')
   */
  return new Pool({
    host,
    user,
    password,
    database,
    idleTimeoutMillis,
    connectionTimeoutMillis
  })
}
