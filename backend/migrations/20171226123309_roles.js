/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-26T12:33:09+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20171226123309_roles.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T04:39:24+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */



exports.up = function(knex, Promise) {
  return knex.schema.createTable('roles', t => {
    t.increments('role_id');
    t.string('role_name');
    t.json('role_privileges');
    t.date('date_created');
    t.date('date_updated');
    t.date('date_deactivated');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('roles');
};
