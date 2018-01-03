/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-26T12:36:27+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20171226123627_thersess_options.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-04T00:36:17+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.up = function(knex, Promise) {
  return knex.schema.createTable('thersess_options', t => {
    t.increments('options_id')
    t.integer('options_therapy_id')
    t.json('options_preference')
    t.timestamps('date_created')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('thersess_options')
}
