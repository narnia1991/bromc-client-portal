/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-01T20:21:56+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20180101202156_feedback.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T22:21:59+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
exports.up = function(knex, Promise) {
  return knex.schema.createTable('billing', t => {
    t.increments('billing_id')
    t.integer('user_id')
    t.string('card_no')
    t.string('validity')
    t.string('cvv')
    t.string('name')
    t.string('address')
    t.date('date_created')
    t.date('date_modified')
    t.date('date_deactivated')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('billing')
}
