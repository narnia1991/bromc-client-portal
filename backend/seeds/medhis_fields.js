/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T02:33:33+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: medhis_fields.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T14:11:08+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('medhis_fields')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('medhis_fields').insert([
        {
          field_name: 'Orthopedic and/or Rehab Medicine'
        },
        {
          field_name: 'Neurology'
        },
        {
          field_name: 'Psychiatry'
        },
        {
          field_name: 'Gastrointestinal'
        },
        {
          field_name: 'Pulmonary Medicine'
        },
        {
          field_name: 'Cardiology'
        },
        {
          field_name: 'Infectious Diseases'
        },
        {
          field_name: 'Endocrinology'
        },
        {
          field_name: 'Rheumatology'
        },
        {
          field_name: 'Obstetrics and Gynecology'
        },
        {
          field_name: 'Painful Emotional Menses Otolaryngology (ENT)'
        },
        {
          field_name: 'Nephrology'
        },
        {
          field_name: 'Oncology'
        },
        {
          field_name: 'Dermatology'
        },
        {
          field_name: 'Breast'
        },
        {
          field_name: 'Past Medical History'
        },
        {
          field_name: 'Vascular Medicine'
        }
      ])
    })
}
