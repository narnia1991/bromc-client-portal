/*
* @Author: Narnia
* @Date:   2017-12-09 01:05:05
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T11:10:51+08:00
*/
import bcrypt from 'bcrypt-nodejs'
const knex = require('./knex')
const table = 'user'

module.exports = {
  getAll: () => {
    return knex(table).select()
  },
  getOne: id => {
    return knex(table)
      .select()
      .where('user_id', id)
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
  create: user => {
    console.log(user)
    return knex(table).insert(user, 'user_id')
  },
  update: (id, user) => {
    return knex(table)
      .where('user_id', id)
      .update(user, 'user_id')
  },
  delete: user_id => {
    return knex(table)
      .where('user_id', user_id)
      .del()
  },
  hasher: password => {
    const salt = bcrypt.genSaltSync(5)
    const encrypted = bcrypt.hashSync(password, salt)
    return encrypted
  },
  verifyPassword: (password, passwordEncrypted) => {
    return bcrypt.compareSync(password, passwordEncrypted)
  }
}

const schema = {
  user_id: 0,
  user_info_id: 0,
  username: '',
  password: '',
  display_name: '',
  token: '',
  login_attempts: 0,
  lock_time: 0,
  role: '',
  status: '',
  date_created: null,
  date_updated: null,
  date_deactivated: null
}

export default schema
