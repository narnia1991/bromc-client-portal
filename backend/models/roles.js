/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:35:32+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: roles.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T11:09:57+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'roles'
module.exports = {
  getAll: () => {
    return knex(table).select()
  },
  getOne: role_id => {
    return knex(table)
      .select()
      .where('role_id', role_id)
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
  create: roles => {
    return knex(table).insert(roles, 'role_id')
  },
  update: (role_id, roles) => {
    return knex(table)
      .where('role_id', role_id)
      .update(roles, 'role_id')
  },
  delete: role_id => {
    return knex(table)
      .where('role_id', role_id)
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
