/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T14:12:51+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: clinic.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T14:18:02+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clinic')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('clinic').insert([
        {
          name: 'Big River Orthopedic Medical Center',
          city: 'Alberta',
          country: 'CANADA',
          phone_number: ' 780-427-1432',
          status: 'active'
        },
        {
          name: 'Big River Orthopedic Medical Center',
          city: 'Edmonton',
          country: 'CANADA',
          phone_number: '  780-427-1432',
          status: 'active'
        },
        {
          name: 'Big River Orthopedic Medical Center',
          country: 'THAILAND',
          phone_number: ' +66812345678',
          status: 'active'
        }
      ])
    })
}
