/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:34:49+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: medical_history.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T09:41:08+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'medical_history'
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
  create: medical_history => {
    return knex(table).insert(medical_history, 'id')
  },
  update: (id, medical_history) => {
    return knex(table)
      .where('id', id)
      .update(medical_history, 'id')
  },
  delete: id => {
    return knex(table)
      .where('id', id)
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
