/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T04:49:48+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20171227044948_access_tokens.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T08:26:25+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.up = function(knex, Promise) {
  return knex.schema.createTable('access_tokens', t => {
    t.increments('history_id')
    t.integer('user_id')
    t.string('password')
    t.date('date_created')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('access_tokens')
}
