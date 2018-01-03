/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-01T20:13:57+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20180101201357_emp_leaves.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-04T00:36:24+08:00
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
    t.dateTime('date_created')
    t.timestamps('date_updated')
    t.dateTime('date_deactivated')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('emp_leaves')
}
