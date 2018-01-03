/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T10:47:24+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20180103104724_employees.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T13:58:10+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', t => {
    t.increments('employee_id')
    t.integer('user_id')
    t.integer('clinic')
    t.string('position')
    t.integer('created_by')
    t.integer('modified_by')
    t.integer('deactivated_by')
    t.date('date_created')
    t.date('date_modified')
    t.date('date_deactivated')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employees')
}
