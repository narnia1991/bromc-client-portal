/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T09:48:41+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20171227094841_clinic.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T14:15:13+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.up = function(knex, Promise) {
  return knex.schema.createTable('clinic', t => {
    t.increments('clinic_id')
    t.string('name')
    t.string('address_1')
    t.string('address_2')
    t.string('city')
    t.string('country')
    t.string('phone_number')
    t.string('cell_number')
    t.string('status')
    t.date('date_created')
    t.date('date_updated')
    t.date('date_deactivated')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('clinic')
}
