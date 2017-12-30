/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:35:14+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: logs.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T09:56:58+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'logs'
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
  create: logs => {
    return knex(table).insert(logs, 'id')
  },
  update: (id, logs) => {
    return knex(table)
      .where('id', id)
      .update(logs, 'id')
  },
  delete: id => {
    return knex(table)
      .where('id', id)
      .del()
  }
}
const schema = {
  log_id: 0,
  log_user: 0,
  log_type: '',
  log_date: null,
  log_screen: '',
  log_action: '',
  log_ip: '',
  log_owner: '',
  log_changes: ''
}

export default schema
