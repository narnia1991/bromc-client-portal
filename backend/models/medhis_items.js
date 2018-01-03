/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:36:07+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: medhis_items.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T11:09:20+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'medhis_items'
module.exports = {
  getAll: () => {
    return knex(table).select()
  },
  getOne: item_id => {
    return knex(table)
      .select()
      .where('item_id', item_id)
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
  create: medhis_items => {
    return knex(table).insert(medhis_items, 'item_id')
  },
  update: (item_id, medhis_items) => {
    return knex(table)
      .where('item_id', item_id)
      .update(medhis_items, 'item_id')
  },
  delete: item_id => {
    return knex(table)
      .where('item_id', item_id)
      .del()
  }
}
const schema = {
  item_id: 0,
  item_field: 0,
  item_name: '',
  date_created: null,
  date_updated: null,
  date_deactivated: null
}

export default schema
