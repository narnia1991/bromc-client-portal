/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T06:06:44+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: feedback.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T11:07:00+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
const knex = require('./knex')
const table = 'feedback'
module.exports = {
  getAll: () => {
    return knex(table).select()
  },
  getOne: feedback_id => {
    return knex(table)
      .select()
      .where('feedback_id', feedback_id)
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
  create: feedback => {
    return knex(table).insert(feedback, 'feedback_id')
  },
  update: (feedback_id, feedback) => {
    return knex(table)
      .where('feedback_id', feedback_id)
      .update(feedback, 'feedback_id')
  },
  delete: feedback_id => {
    return knex(table)
      .where('feedback_id', feedback_id)
      .del()
  }
}

const schema = {
  feedback_id: 0,
  user_id: 0,
  title: '',
  message: '',
  status_admin: '',
  status_client: '',
  read_by: '',
  date_created: null,
  date_modified_admin: null,
  date_modified_client: null
}

export default schema
