/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-01T20:21:56+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20180101202156_feedback.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T08:25:52+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
exports.up = function(knex, Promise) {
  return knex.schema.createTable('feedback', t => {
    t.increments('feedback_id')
    t.integer('user_id')
    t.string('title')
    t.string('message')
    t.boolean('status_admin')
    t.boolean('status_client')
    t.integer('read_by')
    t.date('date_created')
    t.date('date_modified_admin')
    t.date('date_modified_client')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('feedback')
}
