/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:36:07+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: medhis_items.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T08:42:24+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

const knex = require('./knex')
const table = 'medhis_items'
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
  create: medhis_items => {
    return knex(table).insert(medhis_items, 'id')
  },
  update: (id, medhis_items) => {
    return knex(table)
      .where('id', id)
      .update(medhis_items, 'id')
  },
  delete: id => {
    return knex(table)
      .where('id', id)
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
