/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-26T12:31:09+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20171226074740_logs.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T08:32:36+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.up = function(knex, Promise) {
  return knex.schema.createTable('logs', t => {
    t.increments('log_id')
    t.integer('log_user')
    t.string('log_type')
    t.timestamps('log_date')
    t.string('log_endpoint')
    t.string('log_action')
    t.string('log_ip')
    t.string('log_owner')
    t.string('log_changes')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('logs')
}
