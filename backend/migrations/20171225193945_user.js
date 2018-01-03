/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-26T12:31:09+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20171225193945_user.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-04T00:35:31+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', t => {
    t.increments('user_id')
    t.integer('user_info_id')
    t.string('username')
    t.string('display_name')
    t.string('token')
    t.string('password')
    t.string('login_attempts')
    t.integer('lock_time')
    t.string('role')
    t.string('status')
    t.dateTime('date_created')
    t.timestamps('date_updated')
    t.dateTime('date_deactivated')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user')
}
