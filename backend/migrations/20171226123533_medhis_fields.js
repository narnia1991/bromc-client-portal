/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-26T12:35:33+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20171226123533_medhis_fields.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T08:38:36+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.up = function(knex, Promise) {
  return knex.schema.createTable('medhis_fields', t => {
    t.string('field_id')
    t.string('field_name')
    t.date('date_created')
    t.date('date_updated')
    t.date('date_deleted')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('medhis_fields')
}
