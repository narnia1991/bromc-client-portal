/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T01:48:34+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: 20171227014834_password_history.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T08:25:20+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.up = function(knex, Promise) {
  return knex.schema.createTable('password_history', t => {
    t.increments('history_id');
    t.integer('user_id');
    t.string('password');
    t.date('date_created');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('password_history');
};
