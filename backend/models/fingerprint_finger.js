/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:34:37+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: fingerprint_finger.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T09:52:43+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'fingerprint_finger'
module.exports = {
  getAll: () => {
    return knex(table).select()
  },
  getOne: id => {
    return knex(table)
      .select()
      .where('id', id)
      .first()
  },
  create: fingerprint_finger => {
    return knex(table).insert(fingerprint_finger, 'id')
  },
  update: (id, fingerprint_finger) => {
    return knex(table)
      .where('id', id)
      .update(fingerprint_finger, 'id')
  },
  delete: id => {
    return knex(table)
      .where('id', id)
      .del()
  }
}

const schema = {
  user_id: '',
  finger_id: '',
  finger_data: ''
}

export default schema
