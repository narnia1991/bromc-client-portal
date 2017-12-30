/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:24:52+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: user_info.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T08:42:15+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'user_info'
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
  create: user_info => {
    return knex(table).insert(user_info, 'id')
  },
  update: (id, user_info) => {
    return knex(table)
      .where('id', id)
      .update(user_info, 'id')
  },
  delete: id => {
    return knex(table)
      .where('id', id)
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
  e_mail: 0,
  date_created: null,
  date_updated: null,
  date_deactivated: null
}

export default schema
