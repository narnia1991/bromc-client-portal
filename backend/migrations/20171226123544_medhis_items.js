/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-26T12:35:44+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20171226123544_medhis_items.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T04:39:26+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.up = function(knex, Promise) {
  return knex.schema.createTable('medhis_items', t => {
    t.increments('item_id')
    t.integer('item_field')
    t.string('item_name')
    t.date('date_created')
    t.date('date_updated')
    t.date('date_deactivated')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('medhis_items')
}
