/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T06:14:17+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: emp_leaves.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T11:06:57+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'emp_leaves'
module.exports = {
  getAll: () => {
    return knex(table).select()
  },
  getOne: leave_id => {
    return knex(table)
      .select()
      .where('leave_id', leave_id)
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
  create: emp_leaves => {
    return knex(table).insert(emp_leaves, 'leave_id')
  },
  update: (leave_id, emp_leaves) => {
    return knex(table)
      .where('leave_id', leave_id)
      .update(emp_leaves, 'leave_id')
  },
  delete: leave_id => {
    return knex(table)
      .where('leave_id', leave_id)
      .del()
  }
}

const schema = {
  leave_id: 0,
  user_id: 0,
  dates: '',
  status: '',
  approved_by: '',
  date_created: null,
  date_updated: null,
  date_deactivated: null
}

export default schema
