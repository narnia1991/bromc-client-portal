/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:35:14+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: logs.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T11:07:15+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'logs'

module.exports = {
  postLog: logs => {
    return knex(table).insert(logs, 'log_id')
  },
  getLogs: () => {
    return knex(table).select()
  },
  getWhere: (where, limit = 10) => {
    return knex(table)
      .select()
      .where(where)
      .limit(limit)
  },
  getRaw: raw => {
    return knex.raw(raw)
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
