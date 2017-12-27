/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T17:22:03+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: codes.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T17:34:23+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'code'
module.exports = {
  getAll: () => {
    return knex(table).select()
  },
  getOne: value => {
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
  create: code => {
    return knex(table).insert(code, 'value')
  },
  update: (value, code) => {
    return knex(table)
      .where('value', value)
      .update(code, 'value')
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
  redirect_uri: '',
  user_id: ''
}

export default schema
