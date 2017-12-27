/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T04:49:25+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20171227044925_authorization_codes.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T08:38:33+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.up = function(knex, Promise) {
  return knex.schema.createTable('authorization_codes', t => {
    t.increments('history_id')
    t.integer('user_id')
    t.string('password')
    t.date('date_created')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authorization_codes')
}
