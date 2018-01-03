/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-26T12:31:09+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20171226074722_registration.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-04T00:35:39+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.up = function(knex, Promise) {
  return knex.schema.createTable('registration', t => {
    t.increments('registration_id')
    t.integer('user_id')
    t.integer('therapist_id')
    t.integer('therapy_options')
    t.integer('medical_history')
    t.integer('clinic')
    t.dateTime('date_registered')
    t.date('date_therapy')
    t.time('to')
    t.time('from')
    t.string('status')
    t.timestamps('date_updated')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('registration')
}
