/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-01T20:13:57+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20180101201357_emp_leaves.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T11:41:12+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
exports.up = function(knex, Promise) {
  return knex.schema.createTable('emp_leaves', t => {
    t.increments('leave_id')
    t.integer('user_id')
    t.string('dates')
    t.string('status')
    t.integer('approved_by')
    t.date('date_created')
    t.date('date_updated')
    t.date('date_deactivated')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('emp_leaves')
}
