/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T22:19:19+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: billing.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-04T00:32:20+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
const knex = require('./knex')
const table = 'billing'
module.exports = {
  getAll: () => {
    return knex(table).select()
  },
  getOne: billing_id => {
    return knex(table)
      .select()
      .where('billing_id', billing_id)
      .first()
  },
  getWhere: where => {
    return knex(table)
      .select()
      .where(where)
      .orderBy('date_created', 'desc')
  },
  getRaw: raw => {
    return knex.raw(raw)
  },
  create: clinic => {
    return knex(table).insert(clinic, 'billing_id')
  },
  update: (billing_id, clinic) => {
    return knex(table)
      .where('billing_id', billing_id)
      .update(clinic, 'billing_id')
  },
  delete: billing_id => {
    return knex(table)
      .where('billing_id', billing_id)
      .del()
  }
}

const schema = {
  billing_id: 0,
  user_id: '',
  card_no: null,
  validity: null,
  cvv: '',
  name: '',
  address: '',
  date_created: null,
  date_modified: null,
  date_deactivated: null
}

export default schema
