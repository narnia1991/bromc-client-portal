/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:36:19+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: thersess_options.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T09:45:18+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'thersess_options'
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
  create: thersess_options => {
    return knex(table).insert(thersess_options, 'id')
  },
  update: (id, thersess_options) => {
    return knex(table)
      .where('id', id)
      .update(thersess_options, 'id')
  },
  delete: id => {
    return knex(table)
      .where('id', id)
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
