/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:34:37+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: fingerprint_finger.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T11:08:42+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'fingerprint_finger'
module.exports = {
  getAll: () => {
    return knex(table).select()
  },
  getOne: finger_id => {
    return knex(table)
      .select()
      .where('finger_id', finger_id)
      .first()
  },
  getWhere: where => {
    return knex(table)
      .select()
      .where(where)
  },
  getRaw: raw => {
    return knex.raw(raw)
  },
  create: fingerprint_finger => {
    return knex(table).insert(fingerprint_finger, 'finger_id')
  },
  update: (finger_id, fingerprint_finger) => {
    return knex(table)
      .where('finger_id', finger_id)
      .update(fingerprint_finger, 'finger_id')
  },
  delete: finger_id => {
    return knex(table)
      .where('finger_id', finger_id)
      .del()
  }
}

const schema = {
  user_id: '',
  finger_id: '',
  finger_data: ''
}

export default schema
