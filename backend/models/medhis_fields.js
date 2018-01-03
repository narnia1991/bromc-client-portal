/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:35:51+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: medhis_fields.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T11:09:07+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'medhis_fields'
module.exports = {
  getAll: () => {
    return knex(table).select()
  },
  getOne: field_id => {
    return knex(table)
      .select()
      .where('field_id', field_id)
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
  create: medhis_fields => {
    return knex(table).insert(medhis_fields, 'field_id')
  },
  update: (field_id, medhis_fields) => {
    return knex(table)
      .where('field_id', field_id)
      .update(medhis_fields, 'field_id')
  },
  delete: field_id => {
    return knex(table)
      .where('field_id', field_id)
      .del()
  }
}
const schema = {
  field_id: 0,
  field_name: '',
  date_created: null,
  date_updated: null,
  date_deactivated: null
}

export default schema
