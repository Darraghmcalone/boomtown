const { Pool } = require('pg')

module.exports = function(app) {
  /**
   * @TODO: Configuration Variables
   *
   *  Retrieve the necessary information to connect to Postgres
   *  For example: app.get('PG_DB')
   */
    return new Pool({
    host: app.get('PG_HOST'),
    user: app.get('PG_USER'),
    password: app.get('PG_PASSWORD'),
    database: app.get('PG_DB'),
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
    /**
     *  @TODO: Supply the correct configuration values to connect to postgres
     */
  })
  // pool.connect((err, db, done) => {
  //   if (err) {
  //     return console.log(err);
  //   } else {
  //     console.log('postgres.js: check postgres connection')
  //     db.query('SELECT * from users', (err, table) => {
  //       done();
  //       if (err) {
  //         return console.log(err)
  //       } else {
  //         console.log(table.rows)
  //       }
  //     })
  //   }
  // })
}
