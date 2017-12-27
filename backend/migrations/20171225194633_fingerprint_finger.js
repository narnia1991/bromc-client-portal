/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-26T12:31:09+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20171225194633_fingerprint_finger.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T04:39:20+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.up = function(knex, Promise) {
  return knex.schema.createTable('fingerprint_finger', t => {
    t.string('user_id')
    t.string('finger_id')
    t.string('finger_data')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('fingerprint_finger')
}
