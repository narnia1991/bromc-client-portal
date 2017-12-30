/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T02:33:33+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: medhis_fields.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T08:41:35+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 1, colName: 'rowValue1' },
        { id: 2, colName: 'rowValue2' },
        { id: 3, colName: 'rowValue3' }
      ])
    })
}

