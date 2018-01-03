/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T01:48:34+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20171227014834_password_history.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-04T00:36:13+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.up = function(knex, Promise) {
  return knex.schema.createTable('password_history', t => {
    t.increments('history_id')
    t.integer('user_id')
    t.string('password')
    t.timestamps('date_created')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('password_history')
}
