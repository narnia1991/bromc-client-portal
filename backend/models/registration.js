/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:35:05+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: registration.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T09:48:13+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'registration'
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
  create: registration => {
    return knex(table).insert(registration, 'id')
  },
  update: (id, registration) => {
    return knex(table)
      .where('id', id)
      .update(registration, 'id')
  },
  delete: id => {
    return knex(table)
      .where('id', id)
      .del()
  }
}
const schema = {
  registration_id: 0,
  user_id: 0,
  therapist_id: '',
  clinic: '',
  date_updated_registered: null,
  date_therapy: null,
  status: '',
  date_updated: null
}

export default schema
