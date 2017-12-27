/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T08:23:23+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: client.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T09:06:04+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

//this module is for the creation of the client authentication tokens

const knex = require('./knex')
const table = 'client'
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
  getWhere: where => {
    return knex(table)
      .select()
      .where(where)
  },
  create: client => {
    return knex(table).insert(client, 'id')
  },
  update: (id, client) => {
    return knex(table)
      .where('id', id)
      .update(client, 'id')
  },
  delete: id => {
    return knex(table)
      .where('id', id)
      .del()
  }
}

const schema = {
  name: '',
  id: '',
  secret: '',
  user_id: ''
}

export default schema
