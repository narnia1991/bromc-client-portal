/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:34:08+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: fingerprint_device.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T03:34:08+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'fingerprint_device'
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
  create: fingerprint_device => {
    return knex(table).insert(fingerprint_device, 'id')
  },
  update: (id, fingerprint_device) => {
    return knex(table)
      .where('id', id)
      .update(fingerprint_device, 'id')
  },
  delete: id => {
    return knex(table)
      .where('id', id)
      .del()
  }
}

const schema = {
  device_name: '',
  vc: '',
  ac: '',
  vkey: ''
}

export default schema
