/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T14:23:29+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: employees.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T14:32:54+08:00
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
          date_created: '1/6/2014',
          date_modified: '1/6/2014'
        },
        {
          clinic: 3,
          user_id: 3,
          position: 'therapist',
          date_created: '9/9/2011',
          date_modified: '9/9/2011'
        },
        {
          clinic: 3,
          user_id: 5,
          position: 'reception',
          date_created: '2/26/2017',
          date_modified: '2/26/2017'
        },
        {
          clinic: 3,
          user_id: 8,
          position: 'admin',
          date_created: '10/25/2012',
          date_modified: '10/25/2012'
        },
        {
          clinic: 3,
          user_id: 9,
          position: 'admin',
          date_created: '7/4/2010',
          date_modified: '7/4/2010'
        },
        {
          clinic: 1,
          user_id: 11,
          position: 'therapist',
          date_created: '8/9/2013',
          date_modified: '8/9/2013'
        },
        {
          clinic: 1,
          user_id: 12,
          position: 'therapist',
          date_created: '12/8/2017',
          date_modified: '12/8/2017'
        },
        {
          clinic: 2,
          user_id: 13,
          position: 'reception',
          date_created: '11/23/2017',
          date_modified: '11/23/2017'
        },
        {
          clinic: 1,
          user_id: 15,
          position: 'admin',
          date_created: '6/21/2014',
          date_modified: '6/21/2014'
        },
        {
          clinic: 3,
          user_id: 16,
          position: 'therapist',
          date_created: '3/24/2015',
          date_modified: '3/24/2015'
        },
        {
          clinic: 1,
          user_id: 19,
          position: 'admin',
          date_created: '7/16/2017',
          date_modified: '7/16/2017'
        },
        {
          clinic: 3,
          user_id: 21,
          position: 'reception',
          date_created: '2/4/2014',
          date_modified: '2/4/2014'
        },
        {
          clinic: 3,
          user_id: 24,
          position: 'admin',
          date_created: '5/16/2013',
          date_modified: '5/16/2013'
        },
        {
          clinic: 2,
          user_id: 25,
          position: 'admin',
          date_created: '4/27/2017',
          date_modified: '4/27/2017'
        },
        {
          clinic: 3,
          user_id: 27,
          position: 'therapist',
          date_created: '3/24/2011',
          date_modified: '3/24/2011'
        },
        {
          clinic: 1,
          user_id: 28,
          position: 'admin',
          date_created: '9/29/2010',
          date_modified: '9/29/2010'
        },
        {
          clinic: 1,
          user_id: 29,
          position: 'admin',
          date_created: '2/21/2016',
          date_modified: '2/21/2016'
        },
        {
          clinic: 3,
          user_id: 30,
          position: 'therapist',
          date_created: '6/1/2014',
          date_modified: '6/1/2014'
        },
        {
          clinic: 2,
          user_id: 32,
          position: 'reception',
          date_created: '12/16/2011',
          date_modified: '12/16/2011'
        },
        {
          clinic: 3,
          user_id: 33,
          position: 'reception',
          date_created: '12/28/2011',
          date_modified: '12/28/2011'
        },
        {
          clinic: 2,
          user_id: 34,
          position: 'reception',
          date_created: '5/10/2014',
          date_modified: '5/10/2014'
        },
        {
          clinic: 3,
          user_id: 36,
          position: 'admin',
          date_created: '9/11/2011',
          date_modified: '9/11/2011'
        },
        {
          clinic: 3,
          user_id: 38,
          position: 'admin',
          date_created: '12/16/2013',
          date_modified: '12/16/2013'
        },
        {
          clinic: 3,
          user_id: 40,
          position: 'therapist',
          date_created: '4/8/2016',
          date_modified: '4/8/2016'
        },
        {
          clinic: 2,
          user_id: 41,
          position: 'reception',
          date_created: '5/30/2011',
          date_modified: '5/30/2011'
        },
        {
          clinic: 1,
          user_id: 42,
          position: 'therapist',
          date_created: '2/18/2012',
          date_modified: '2/18/2012'
        },
        {
          clinic: 2,
          user_id: 43,
          position: 'therapist',
          date_created: '1/8/2013',
          date_modified: '1/8/2013'
        },
        {
          clinic: 3,
          user_id: 44,
          position: 'admin',
          date_created: '7/5/2016',
          date_modified: '7/5/2016'
        },
        {
          clinic: 1,
          user_id: 48,
          position: 'admin',
          date_created: '5/30/2017',
          date_modified: '5/30/2017'
        },
        {
          clinic: 1,
          user_id: 49,
          position: 'therapist',
          date_created: '1/30/2012',
          date_modified: '1/30/2012'
        },
        {
          clinic: 1,
          user_id: 50,
          position: 'admin',
          date_created: '7/21/2013',
          date_modified: '7/21/2013'
        },
        {
          clinic: 3,
          user_id: 52,
          position: 'reception',
          date_created: '3/7/2014',
          date_modified: '3/7/2014'
        },
        {
          clinic: 1,
          user_id: 53,
          position: 'admin',
          date_created: '9/13/2011',
          date_modified: '9/13/2011'
        },
        {
          clinic: 2,
          user_id: 54,
          position: 'admin',
          date_created: '10/26/2016',
          date_modified: '10/26/2016'
        },
        {
          clinic: 2,
          user_id: 55,
          position: 'reception',
          date_created: '5/11/2014',
          date_modified: '5/11/2014'
        },
        {
          clinic: 2,
          user_id: 56,
          position: 'reception',
          date_created: '6/7/2016',
          date_modified: '6/7/2016'
        },
        {
          clinic: 1,
          user_id: 57,
          position: 'therapist',
          date_created: '2/15/2014',
          date_modified: '2/15/2014'
        },
        {
          clinic: 1,
          user_id: 58,
          position: 'reception',
          date_created: '3/31/2014',
          date_modified: '3/31/2014'
        },
        {
          clinic: 1,
          user_id: 59,
          position: 'admin',
          date_created: '11/26/2017',
          date_modified: '11/26/2017'
        },
        {
          clinic: 3,
          user_id: 61,
          position: 'admin',
          date_created: '6/25/2012',
          date_modified: '6/25/2012'
        },
        {
          clinic: 1,
          user_id: 62,
          position: 'admin',
          date_created: '12/25/2013',
          date_modified: '12/25/2013'
        },
        {
          clinic: 1,
          user_id: 63,
          position: 'therapist',
          date_created: '3/30/2014',
          date_modified: '3/30/2014'
        },
        {
          clinic: 2,
          user_id: 64,
          position: 'admin',
          date_created: '3/17/2017',
          date_modified: '3/17/2017'
        },
        {
          clinic: 3,
          user_id: 68,
          position: 'therapist',
          date_created: '8/1/2017',
          date_modified: '8/1/2017'
        },
        {
          clinic: 1,
          user_id: 69,
          position: 'admin',
          date_created: '1/16/2015',
          date_modified: '1/16/2015'
        },
        {
          clinic: 1,
          user_id: 70,
          position: 'reception',
          date_created: '6/28/2015',
          date_modified: '6/28/2015'
        },
        {
          clinic: 1,
          user_id: 71,
          position: 'admin',
          date_created: '7/16/2016',
          date_modified: '7/16/2016'
        },
        {
          clinic: 1,
          user_id: 72,
          position: 'reception',
          date_created: '10/21/2014',
          date_modified: '10/21/2014'
        },
        {
          clinic: 1,
          user_id: 73,
          position: 'therapist',
          date_created: '2/26/2012',
          date_modified: '2/26/2012'
        },
        {
          clinic: 1,
          user_id: 74,
          position: 'reception',
          date_created: '7/7/2017',
          date_modified: '7/7/2017'
        },
        {
          clinic: 1,
          user_id: 75,
          position: 'therapist',
          date_created: '9/22/2010',
          date_modified: '9/22/2010'
        },
        {
          clinic: 2,
          user_id: 76,
          position: 'therapist',
          date_created: '3/22/2014',
          date_modified: '3/22/2014'
        },
        {
          clinic: 1,
          user_id: 77,
          position: 'admin',
          date_created: '9/6/2013',
          date_modified: '9/6/2013'
        },
        {
          clinic: 1,
          user_id: 78,
          position: 'reception',
          date_created: '8/21/2012',
          date_modified: '8/21/2012'
        },
        {
          clinic: 3,
          user_id: 79,
          position: 'therapist',
          date_created: '9/29/2013',
          date_modified: '9/29/2013'
        },
        {
          clinic: 2,
          user_id: 80,
          position: 'admin',
          date_created: '3/20/2011',
          date_modified: '3/20/2011'
        },
        {
          clinic: 1,
          user_id: 81,
          position: 'therapist',
          date_created: '5/6/2014',
          date_modified: '5/6/2014'
        },
        {
          clinic: 3,
          user_id: 82,
          position: 'reception',
          date_created: '5/6/2016',
          date_modified: '5/6/2016'
        },
        {
          clinic: 2,
          user_id: 84,
          position: 'admin',
          date_created: '4/30/2014',
          date_modified: '4/30/2014'
        },
        {
          clinic: 1,
          user_id: 85,
          position: 'reception',
          date_created: '6/12/2010',
          date_modified: '6/12/2010'
        },
        {
          clinic: 2,
          user_id: 86,
          position: 'admin',
          date_created: '2/5/2010',
          date_modified: '2/5/2010'
        },
        {
          clinic: 3,
          user_id: 87,
          position: 'reception',
          date_created: '6/21/2010',
          date_modified: '6/21/2010'
        },
        {
          clinic: 2,
          user_id: 88,
          position: 'admin',
          date_created: '5/28/2014',
          date_modified: '5/28/2014'
        },
        {
          clinic: 1,
          user_id: 89,
          position: 'therapist',
          date_created: '4/19/2012',
          date_modified: '4/19/2012'
        },
        {
          clinic: 3,
          user_id: 90,
          position: 'therapist',
          date_created: '2/14/2014',
          date_modified: '2/14/2014'
        },
        {
          clinic: 3,
          user_id: 92,
          position: 'therapist',
          date_created: '12/28/2016',
          date_modified: '12/28/2016'
        },
        {
          clinic: 2,
          user_id: 93,
          position: 'therapist',
          date_created: '12/4/2013',
          date_modified: '12/4/2013'
        },
        {
          clinic: 2,
          user_id: 94,
          position: 'admin',
          date_created: '10/10/2011',
          date_modified: '10/10/2011'
        },
        {
          clinic: 3,
          user_id: 96,
          position: 'therapist',
          date_created: '8/17/2017',
          date_modified: '8/17/2017'
        },
        {
          clinic: 1,
          user_id: 97,
          position: 'reception',
          date_created: '6/7/2012',
          date_modified: '6/7/2012'
        },
        {
          clinic: 3,
          user_id: 100,
          position: 'therapist',
          date_created: '10/23/2012',
          date_modified: '10/23/2012'
        },
        {
          clinic: 2,
          user_id: 101,
          position: 'therapist',
          date_created: '9/19/2013',
          date_modified: '9/19/2013'
        },
        {
          clinic: 3,
          user_id: 103,
          position: 'admin',
          date_created: '7/28/2016',
          date_modified: '7/28/2016'
        },
        {
          clinic: 1,
          user_id: 104,
          position: 'therapist',
          date_created: '12/17/2010',
          date_modified: '12/17/2010'
        },
        {
          clinic: 3,
          user_id: 105,
          position: 'admin',
          date_created: '4/15/2015',
          date_modified: '4/15/2015'
        },
        {
          clinic: 2,
          user_id: 106,
          position: 'therapist',
          date_created: '10/30/2011',
          date_modified: '10/30/2011'
        },
        {
          clinic: 3,
          user_id: 107,
          position: 'reception',
          date_created: '4/9/2013',
          date_modified: '4/9/2013'
        },
        {
          clinic: 3,
          user_id: 108,
          position: 'admin',
          date_created: '7/24/2014',
          date_modified: '7/24/2014'
        },
        {
          clinic: 3,
          user_id: 112,
          position: 'admin',
          date_created: '8/29/2010',
          date_modified: '8/29/2010'
        },
        {
          clinic: 3,
          user_id: 113,
          position: 'therapist',
          date_created: '11/18/2011',
          date_modified: '11/18/2011'
        },
        {
          clinic: 3,
          user_id: 114,
          position: 'therapist',
          date_created: '9/30/2013',
          date_modified: '9/30/2013'
        },
        {
          clinic: 3,
          user_id: 115,
          position: 'reception',
          date_created: '12/13/2013',
          date_modified: '12/13/2013'
        },
        {
          clinic: 3,
          user_id: 116,
          position: 'therapist',
          date_created: '8/19/2014',
          date_modified: '8/19/2014'
        },
        {
          clinic: 3,
          user_id: 117,
          position: 'reception',
          date_created: '12/23/2012',
          date_modified: '12/23/2012'
        },
        {
          clinic: 1,
          user_id: 118,
          position: 'admin',
          date_created: '6/4/2015',
          date_modified: '6/4/2015'
        },
        {
          clinic: 3,
          user_id: 119,
          position: 'reception',
          date_created: '8/4/2011',
          date_modified: '8/4/2011'
        },
        {
          clinic: 1,
          user_id: 120,
          position: 'therapist',
          date_created: '6/14/2016',
          date_modified: '6/14/2016'
        },
        {
          clinic: 2,
          user_id: 121,
          position: 'admin',
          date_created: '11/4/2016',
          date_modified: '11/4/2016'
        },
        {
          clinic: 3,
          user_id: 123,
          position: 'therapist',
          date_created: '2/24/2012',
          date_modified: '2/24/2012'
        },
        {
          clinic: 1,
          user_id: 125,
          position: 'admin',
          date_created: '11/5/2016',
          date_modified: '11/5/2016'
        },
        {
          clinic: 3,
          user_id: 126,
          position: 'therapist',
          date_created: '8/28/2016',
          date_modified: '8/28/2016'
        },
        {
          clinic: 3,
          user_id: 128,
          position: 'therapist',
          date_created: '12/18/2016',
          date_modified: '12/18/2016'
        },
        {
          clinic: 2,
          user_id: 129,
          position: 'reception',
          date_created: '9/21/2011',
          date_modified: '9/21/2011'
        },
        {
          clinic: 1,
          user_id: 130,
          position: 'admin',
          date_created: '2/28/2010',
          date_modified: '2/28/2010'
        },
        {
          clinic: 3,
          user_id: 132,
          position: 'admin',
          date_created: '12/24/2012',
          date_modified: '12/24/2012'
        },
        {
          clinic: 3,
          user_id: 133,
          position: 'therapist',
          date_created: '4/28/2015',
          date_modified: '4/28/2015'
        },
        {
          clinic: 1,
          user_id: 134,
          position: 'reception',
          date_created: '4/26/2012',
          date_modified: '4/26/2012'
        },
        {
          clinic: 2,
          user_id: 137,
          position: 'admin',
          date_created: '7/25/2012',
          date_modified: '7/25/2012'
        },
        {
          clinic: 3,
          user_id: 139,
          position: 'admin',
          date_created: '5/5/2017',
          date_modified: '5/5/2017'
        },
        {
          clinic: 2,
          user_id: 140,
          position: 'therapist',
          date_created: '7/25/2013',
          date_modified: '7/25/2013'
        },
        {
          clinic: 2,
          user_id: 146,
          position: 'reception',
          date_created: '9/21/2015',
          date_modified: '9/21/2015'
        },
        {
          clinic: 2,
          user_id: 147,
          position: 'reception',
          date_created: '3/2/2012',
          date_modified: '3/2/2012'
        },
        {
          clinic: 1,
          user_id: 148,
          position: 'reception',
          date_created: '3/23/2016',
          date_modified: '3/23/2016'
        },
        {
          clinic: 3,
          user_id: 149,
          position: 'admin',
          date_created: '9/2/2010',
          date_modified: '9/2/2010'
        },
        {
          clinic: 1,
          user_id: 150,
          position: 'admin',
          date_created: '11/24/2015',
          date_modified: '11/24/2015'
        },
        {
          clinic: 2,
          user_id: 152,
          position: 'admin',
          date_created: '12/5/2016',
          date_modified: '12/5/2016'
        },
        {
          clinic: 3,
          user_id: 153,
          position: 'therapist',
          date_created: '9/26/2015',
          date_modified: '9/26/2015'
        },
        {
          clinic: 1,
          user_id: 154,
          position: 'admin',
          date_created: '12/19/2013',
          date_modified: '12/19/2013'
        },
        {
          clinic: 1,
          user_id: 155,
          position: 'admin',
          date_created: '10/6/2013',
          date_modified: '10/6/2013'
        },
        {
          clinic: 1,
          user_id: 157,
          position: 'reception',
          date_created: '4/17/2011',
          date_modified: '4/17/2011'
        },
        {
          clinic: 2,
          user_id: 158,
          position: 'therapist',
          date_created: '10/15/2012',
          date_modified: '10/15/2012'
        },
        {
          clinic: 1,
          user_id: 159,
          position: 'admin',
          date_created: '5/12/2014',
          date_modified: '5/12/2014'
        },
        {
          clinic: 1,
          user_id: 160,
          position: 'therapist',
          date_created: '3/22/2017',
          date_modified: '3/22/2017'
        },
        {
          clinic: 1,
          user_id: 161,
          position: 'reception',
          date_created: '9/14/2012',
          date_modified: '9/14/2012'
        },
        {
          clinic: 3,
          user_id: 162,
          position: 'therapist',
          date_created: '12/8/2016',
          date_modified: '12/8/2016'
        },
        {
          clinic: 3,
          user_id: 163,
          position: 'admin',
          date_created: '12/26/2011',
          date_modified: '12/26/2011'
        },
        {
          clinic: 2,
          user_id: 167,
          position: 'therapist',
          date_created: '10/16/2013',
          date_modified: '10/16/2013'
        },
        {
          clinic: 3,
          user_id: 170,
          position: 'admin',
          date_created: '7/17/2014',
          date_modified: '7/17/2014'
        },
        {
          clinic: 2,
          user_id: 171,
          position: 'therapist',
          date_created: '7/3/2014',
          date_modified: '7/3/2014'
        },
        {
          clinic: 2,
          user_id: 172,
          position: 'admin',
          date_created: '8/25/2016',
          date_modified: '8/25/2016'
        },
        {
          clinic: 2,
          user_id: 173,
          position: 'therapist',
          date_created: '12/7/2010',
          date_modified: '12/7/2010'
        },
        {
          clinic: 3,
          user_id: 174,
          position: 'reception',
          date_created: '4/22/2012',
          date_modified: '4/22/2012'
        },
        {
          clinic: 2,
          user_id: 175,
          position: 'reception',
          date_created: '6/18/2012',
          date_modified: '6/18/2012'
        },
        {
          clinic: 1,
          user_id: 176,
          position: 'reception',
          date_created: '10/12/2015',
          date_modified: '10/12/2015'
        },
        {
          clinic: 1,
          user_id: 177,
          position: 'reception',
          date_created: '5/30/2011',
          date_modified: '5/30/2011'
        },
        {
          clinic: 3,
          user_id: 178,
          position: 'therapist',
          date_created: '6/6/2015',
          date_modified: '6/6/2015'
        },
        {
          clinic: 1,
          user_id: 180,
          position: 'reception',
          date_created: '10/10/2011',
          date_modified: '10/10/2011'
        }
      ])
    })
}
