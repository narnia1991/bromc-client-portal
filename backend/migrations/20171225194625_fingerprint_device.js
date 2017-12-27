/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-26T12:31:09+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20171225194625_fingerprint_device.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T08:38:44+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.up = function(knex, Promise) {
  return knex.schema.createTable('fingerprint_device', t => {
    t.string('device_name')
    t.string('vc')
    t.string('ac')
    t.string('vkey')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('fingerprint_device')
}
