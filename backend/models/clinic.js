/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T09:51:27+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: clinic.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T11:06:54+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'clinic'
module.exports = {
  getAll: () => {
    return knex(table).select()
  },
  getOne: clinic_id => {
    return knex(table)
      .select()
      .where('clinic_id', clinic_id)
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
  create: clinic => {
    return knex(table).insert(clinic, 'clinic_id')
  },
  update: (clinic_id, clinic) => {
    return knex(table)
      .where('clinic_id', clinic_id)
      .update(clinic, 'clinic_id')
  },
  delete: clinic_id => {
    return knex(table)
      .where('clinic_id', clinic_id)
      .del()
  }
}

const schema = {
  clinic_id: 0,
  name: '',
  address_1: null,
  address_2: null,
  city: 0,
  country: '',
  phone_number: '',
  cell_number: '',
  status: '',
  date_created: null,
  date_updated: null,
  date_deactivated: null
}

export default schema
