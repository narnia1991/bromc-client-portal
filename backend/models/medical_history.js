/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:34:49+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: medical_history.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T22:59:00+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'medical_history'
module.exports = {
  getAll: () => {
    return knex(table).select()
  },
  getOne: medical_history_id => {
    return knex(table)
      .select()
      .where('medical_history_id', medical_history_id)
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
  create: medical_history => {
    return knex(table).insert(medical_history, 'medical_history_id')
  },
  update: (medical_history_id, medical_history) => {
    return knex(table)
      .where('medical_history_id', medical_history_id)
      .update(medical_history, 'medical_history_id')
  },
  delete: medical_history_id => {
    return knex(table)
      .where('medical_history_id', medical_history_id)
      .del()
  }
}
const schema = {
  medical_history_id: 0,
  user_id: 0,
  med_history: null,
  date_created: null
}

export default schema
