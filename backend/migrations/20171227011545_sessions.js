/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T01:15:45+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20171227011545_sessions.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T14:21:45+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.up = function(knex, Promise) {
  return knex.schema.createTable('sessions', t => {
    t.increments('session_id')
    t.integer('session_token')
    t.json('session_user')
    t.date('date_created')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sessions')
}
