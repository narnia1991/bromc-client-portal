/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T14:23:29+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: employees.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T16:26:58+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('employees').insert([
        {
          clinic: 1,
          user_id: 2,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 3,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 5,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 8,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 9,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 11,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 12,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 13,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 15,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 16,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 19,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 21,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 24,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 25,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 27,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 28,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 29,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 30,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 32,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 33,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 34,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 36,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 38,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 40,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 41,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 42,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 43,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 44,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 48,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 49,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 50,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 52,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 53,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 54,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 55,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 56,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 57,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 58,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 59,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 61,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 62,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 63,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 64,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 68,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 69,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 70,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 71,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 72,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 73,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 74,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 75,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 76,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 77,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 78,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 79,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 80,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 81,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 82,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 84,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 85,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 86,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 87,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 88,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 89,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 90,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 92,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 93,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 94,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 96,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 97,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 100,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 101,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 103,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 104,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 105,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 106,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 107,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 108,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 112,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 113,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 114,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 115,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 116,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 117,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 118,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 119,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 120,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 121,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 123,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 125,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 126,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 128,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 129,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 130,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 132,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 133,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 134,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 137,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 139,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 140,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 146,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 147,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 148,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 149,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 150,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 152,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 153,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 154,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 155,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 157,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 158,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 159,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 160,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 161,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 162,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 163,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 167,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 170,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 171,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 172,
          position: 'admin',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 173,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 174,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 1,
          user_id: 175,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 176,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 3,
          user_id: 177,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 178,
          position: 'therapist',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        },
        {
          clinic: 2,
          user_id: 180,
          position: 'reception',
          date_created: '2014/01/06',
          date_modified: '2014/01/06'
        }
      ])
    })
}
