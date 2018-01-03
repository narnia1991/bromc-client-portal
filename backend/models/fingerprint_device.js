/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:34:08+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: fingerprint_device.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T11:08:22+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'fingerprint_device'
module.exports = {
  getAll: () => {
    return knex(table).select()
  },
  getOne: device_name => {
    return knex(table)
      .select()
      .where('device_name', device_name)
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
  create: fingerprint_device => {
    return knex(table).insert(fingerprint_device, 'device_name')
  },
  update: (device_name, fingerprint_device) => {
    return knex(table)
      .where('device_name', device_name)
      .update(fingerprint_device, 'device_name')
  },
  delete: device_name => {
    return knex(table)
      .where('device_name', device_name)
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
