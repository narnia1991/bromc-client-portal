/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T17:29:39+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20171227172939_code.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T17:35:28+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.up = function(knex, Promise) {
  return knex.schema.createTable('code', t => {
    t.string('value')
    t.string('client_id')
    t.string('redirect_uri')
    t.string('user_id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('code')
}
