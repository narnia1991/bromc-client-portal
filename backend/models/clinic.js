/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T09:51:27+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: clinic.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T09:51:27+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'clinic'
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
  create: clinic => {
    return knex(table).insert(clinic, 'id')
  },
  update: (id, clinic) => {
    return knex(table)
      .where('id', id)
      .update(clinic, 'id')
  },
  delete: id => {
    return knex(table)
      .where('id', id)
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
