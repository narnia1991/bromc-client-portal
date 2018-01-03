/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:24:52+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: user_info.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T13:41:28+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'user_info'
module.exports = {
  getAll: () => {
    return knex(table).select()
  },
  getOne: user_info_id => {
    return knex(table)
      .select()
      .where('user_info_id', user_info_id)
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
  create: user_info => {
    return knex(table).insert(user_info, 'user_info_id')
  },
  update: (user_info_id, user_info) => {
    return knex(table)
      .where('user_info_id', user_info_id)
      .update(user_info, 'user_info_id')
  },
  delete: user_info_id => {
    return knex(table)
      .where('user_info_id', user_info_id)
      .del()
  }
}

const schema = {
  user_info_id: 0,
  first_name: '',
  middle_name: '',
  last_name: '',
  address_1: '',
  address_2: '',
  city: 0,
  country: '',
  phone_number: '',
  cell_number: '',
  birth_date: 0,
  gender: 'Male',
  e_mail: 0,
  date_created: null,
  date_updated: null,
  date_deactivated: null
}

export default schema
