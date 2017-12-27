/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-26T12:31:09+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20171226074706_medical_history.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T04:39:20+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.up = function(knex, Promise) {
  return knex.schema.createTable('medical_history', t => {
    t.string('medical_history_id')
    t.string('user_id')
    t.json('med_history')
    t.string('date_created')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('medical_history')
}
