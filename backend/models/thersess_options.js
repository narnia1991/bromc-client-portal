/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:36:19+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: thersess_options.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T11:07:40+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'thersess_options'
module.exports = {
  getAll: () => {
    return knex(table).select()
  },
  getOne: options_id => {
    return knex(table)
      .select()
      .where('options_id', options_id)
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
  create: thersess_options => {
    return knex(table).insert(thersess_options, 'options_id')
  },
  update: (options_id, thersess_options) => {
    return knex(table)
      .where('options_id', options_id)
      .update(thersess_options, 'options_id')
  },
  delete: options_id => {
    return knex(table)
      .where('options_id', options_id)
      .del()
  }
}
const schema = {
  options_id: 0,
  options_therapy_id: 0,
  options_preference: {},
  date_created: ''
}

export default schema
