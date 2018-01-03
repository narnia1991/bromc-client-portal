/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-26T12:33:09+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20171226123309_roles.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-04T00:35:44+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.up = function(knex, Promise) {
  return knex.schema.createTable('roles', t => {
    t.increments('role_id')
    t.string('role_name')
    t.json('role_privileges')
    t.dateTime('date_created')
    t.timestamps('date_updated')
    t.dateTime('date_deactivated')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('roles')
}
