/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T02:33:39+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: medhis_items.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T14:11:50+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('medhis_items')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('medhis_items').insert([
        {
          item_field: 1,
          item_name: ' Spinal problems '
        },
        {
          item_field: 1,
          item_name: ' Joint pain '
        },
        {
          item_field: 1,
          item_name: ' Fractures '
        },
        {
          item_field: 1,
          item_name: ' Dislocations '
        },
        {
          item_field: 1,
          item_name: 'Scoliosis '
        },
        {
          item_field: 1,
          item_name: 'Disk problems'
        },
        {
          item_field: 1,
          item_name: ' Spasms, cramps '
        },
        {
          item_field: 1,
          item_name: 'Sprains/Strains '
        },
        {
          item_field: 1,
          item_name: 'Tendinitis/Bursitis '
        },
        {
          item_field: 1,
          item_name: ' Spinal injury'
        },
        {
          item_field: 1,
          item_name: ' Neck pain '
        },
        {
          item_field: 1,
          item_name: ' Recent sprain'
        },
        {
          item_field: 1,
          item_name: ' Low back Pain '
        },
        {
          item_field: 1,
          item_name: 'Hip pain '
        },
        {
          item_field: 1,
          item_name: 'Neck, '
        },
        {
          item_field: 1,
          item_name: 'Shoulder & arm Pain '
        },
        {
          item_field: 1,
          item_name: 'Weak or sore muscles '
        },
        {
          item_field: 1,
          item_name: 'Sciatica, shooting pain '
        },
        {
          item_field: 2,
          item_name: 'Stroke '
        },
        {
          item_field: 2,
          item_name: 'Concussions '
        },
        {
          item_field: 2,
          item_name: 'Epilepsy '
        },
        {
          item_field: 2,
          item_name: 'Numbness '
        },
        {
          item_field: 2,
          item_name: 'Tingling'
        },
        {
          item_field: 2,
          item_name: ' Headache'
        },
        {
          item_field: 3,
          item_name: 'Depression'
        },
        {
          item_field: 3,
          item_name: 'Chest pain'
        },
        {
          item_field: 3,
          item_name: ' Fatigue'
        },
        {
          item_field: 3,
          item_name: ' Sleep Disturbances'
        },
        {
          item_field: 4,
          item_name: 'Bowel dysfunction '
        },
        {
          item_field: 4,
          item_name: 'Gas '
        },
        {
          item_field: 4,
          item_name: 'Bloating '
        },
        {
          item_field: 4,
          item_name: 'Abdominal Pains'
        },
        {
          item_field: 5,
          item_name: ' Asthma '
        },
        {
          item_field: 5,
          item_name: 'Chest pain  '
        },
        {
          item_field: 5,
          item_name: ' Sleep Disturbances'
        },
        {
          item_field: 6,
          item_name: ' High/Low blood pressure '
        },
        {
          item_field: 6,
          item_name: 'Poor circulation'
        },
        {
          item_field: 6,
          item_name: 'Swollen Ankles'
        },
        {
          item_field: 6,
          item_name: 'Abdominal Pains'
        },
        {
          item_field: 6,
          item_name: 'Chest pain  '
        },
        {
          item_field: 6,
          item_name: ' Fatigue'
        },
        {
          item_field: 7,
          item_name: 'HIV '
        },
        {
          item_field: 7,
          item_name: 'TB '
        },
        {
          item_field: 7,
          item_name: ' Flu or cold '
        },
        {
          item_field: 7,
          item_name: ' Infections'
        },
        {
          item_field: 7,
          item_name: ' Fever '
        },
        {
          item_field: 8,
          item_name: 'Diabetes '
        },
        {
          item_field: 8,
          item_name: 'Thyroid dysfunction '
        },
        {
          item_field: 8,
          item_name: 'Numbness '
        },
        {
          item_field: 8,
          item_name: 'Tingling'
        },
        {
          item_field: 8,
          item_name: 'Fatigue'
        },
        {
          item_field: 9,
          item_name: 'Lupus '
        },
        {
          item_field: 9,
          item_name: 'Arthritis '
        },
        {
          item_field: 9,
          item_name: 'Swollen Ankles'
        },
        {
          item_field: 10,
          item_name: ' Pregnancy '
        },
        {
          item_field: 11,
          item_name: ' Sinus problems '
        },
        {
          item_field: 11,
          item_name: 'TMJ, Jaw Pain'
        },
        {
          item_field: 11,
          item_name: ' Dizziness, Ringing in the ear '
        },
        {
          item_field: 12,
          item_name: 'Kidney Dysfunction '
        },
        {
          item_field: 12,
          item_name: 'Swollen Ankles'
        },
        {
          item_field: 13,
          item_name: '  Cancer Tumors'
        },
        {
          item_field: 14,
          item_name: 'Athletes foot/warts '
        },
        {
          item_field: 14,
          item_name: 'Urology '
        },
        {
          item_field: 14,
          item_name: 'Bladder '
        },
        {
          item_field: 15,
          item_name: 'Fibrotic Cyst '
        },
        {
          item_field: 15,
          item_name: 'lymphedema '
        },
        {
          item_field: 16,
          item_name: 'Recent surgery'
        },
        {
          item_field: 16,
          item_name: 'Allergies: Scents'
        },
        {
          item_field: 16,
          item_name: 'Allergies: oils'
        },
        {
          item_field: 16,
          item_name: 'Allergies: Lotions '
        },
        {
          item_field: 16,
          item_name: 'Allergies: Detergents '
        },
        {
          item_field: 16,
          item_name: 'Artificial joints '
        },
        {
          item_field: 17,
          item_name: 'Varicose Veins'
        }
      ])
    })
}
