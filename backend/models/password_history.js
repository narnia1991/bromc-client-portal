/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:36:37+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: password_history.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T09:58:04+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'password_history'
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
  create: password_history => {
    return knex(table).insert(password_history, 'id')
  },
  update: (id, password_history) => {
    return knex(table)
      .where('id', id)
      .update(password_history, 'id')
  },
  delete: id => {
    return knex(table)
      .where('id', id)
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
