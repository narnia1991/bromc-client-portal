/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T01:15:45+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20171227011545_sessions.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2017-12-28T14:56:55+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.up = function(knex, Promise) {
  return knex.schema.createTable('sessions', t => {
    t.string('session_id')
    t.integer('expires')
    t.string('data')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sessions')
}
