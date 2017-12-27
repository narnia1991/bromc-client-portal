/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T08:24:54+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20171227082454_client.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T08:42:34+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.up = function(knex, Promise) {
  return knex.schema.createTable('client', t => {
    t.string('name')
    t.string('id')
    t.string('secret')
    t.string('user_id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('client')
}
