/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:35:32+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: roles.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T08:42:20+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'roles'
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
  create: roles => {
    return knex(table).insert(roles, 'id')
  },
  update: (id, roles) => {
    return knex(table)
      .where('id', id)
      .update(roles, 'id')
  },
  delete: id => {
    return knex(table)
      .where('id', id)
      .del()
  }
}
const schema = {
  role_id: 0,
  role_name: '',
  role_privileges: null,
  date_created: null,
  date_updated: null,
  date_deactivated: null
}

export default schema
