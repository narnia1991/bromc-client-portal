/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-26T12:35:33+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20171226123533_medhis_fields.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-04T00:35:51+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.up = function(knex, Promise) {
  return knex.schema.createTable('medhis_fields', t => {
    t.string('field_id')
    t.string('field_name')
    t.dateTime('date_created')
    t.timestamps('date_updated')
    t.dateTime('date_deleted')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('medhis_fields')
}
