/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:36:37+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: password_history.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T11:09:39+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'password_history'
module.exports = {
  getAll: () => {
    return knex(table).select()
  },
  getOne: history_id => {
    return knex(table)
      .select()
      .where('history_id', history_id)
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
  create: password_history => {
    return knex(table).insert(password_history, 'history_id')
  },
  update: (history_id, password_history) => {
    return knex(table)
      .where('history_id', history_id)
      .update(password_history, 'history_id')
  },
  delete: history_id => {
    return knex(table)
      .where('history_id', history_id)
      .del()
  }
}
const schema = {
  history_id: 0,
  user_id: 0,
  password: '',
  date_created: null
}

export default schema
