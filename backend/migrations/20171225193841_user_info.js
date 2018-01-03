/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-26T12:31:09+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20171225193841_user_info.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-04T00:35:13+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_info', t => {
    t.increments('user_info_id')
    t.string('first_name')
    t.string('middle_name')
    t.string('last_name')
    t.string('address_1')
    t.string('address_2')
    t.integer('city')
    t.string('country')
    t.string('phone_number')
    t.string('cell_number')
    t.string('birth_date')
    t.string('gender')
    t.string('e_mail')
    t.dateTime('date_created')
    t.dateTime('date_updated')
    t.dateTime('date_deactivated')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_info')
}
