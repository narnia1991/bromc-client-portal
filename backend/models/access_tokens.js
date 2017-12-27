/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T17:21:53+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: access_tokens.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T18:24:13+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'access_tokens'
module.exports = {
  getAll: () => {
    return knex(table).select()
  },
  getOne: id => {
    return knex(table)
      .select()
      .where('value', value)
      .first()
  },
  getWhere: where => {
    return knex(table)
      .select()
      .where(where)
  },
  create: access_tokens => {
    return knex(table).insert(access_tokens, 'value')
  },
  update: (value, access_tokens) => {
    return knex(table)
      .where('value', value)
      .update(access_tokens, 'value')
  },
  delete: value => {
    return knex(table)
      .where('value', value)
      .del()
  }
}

const schema = {
  value: '',
  client_id: '',
  user_id: ''
}

export default schema
