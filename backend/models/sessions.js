/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:36:26+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: sessions.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T08:42:19+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'sessions'
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
  create: sessions => {
    return knex(table).insert(sessions, 'id')
  },
  update: (id, sessions) => {
    return knex(table)
      .where('id', id)
      .update(sessions, 'id')
  },
  delete: id => {
    return knex(table)
      .where('id', id)
      .del()
  }
}
const schema = {
  user_id: 0,
  user_info_id: 0,
  username: '',
  password: '',
  display_name: '',
  token: '',
  login_attempts: 0,
  lock_time: 0,
  role: '',
  status: ''
}

export default schema
