/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:35:05+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: registration.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T22:49:33+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'registration'
module.exports = {
  getAll: () => {
    return knex(table).select()
  },
  getOne: registration_id => {
    return knex(table)
      .select()
      .where('registration_id', registration_id)
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
  create: registration => {
    return knex(table).insert(registration, 'registration_id')
  },
  update: (registration_id, registration) => {
    return knex(table)
      .where('registration_id', registration_id)
      .update(registration, 'registration_id')
  },
  delete: registration_id => {
    return knex(table)
      .where('registration_id', registration_id)
      .del()
  }
}

const schema = {
  registration_id: 0,
  user_id: 0,
  therapist_id: '',
  therapy_options: '',
  medical_history: '',
  to: '',
  from: '',
  clinic: '',
  date_updated_registered: null,
  date_therapy: null,
  status: '',
  date_updated: null
}

export default schema
