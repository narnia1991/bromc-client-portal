/*
* @Author: Narnia
* @Date:   2017-12-09 01:05:05
* @Last Modified by:   Narnia
* @Last Modified time: 2017-12-19 03:09:00
*/
import knex from './knex'

const getAll = () => {
  return knex('user').select()
}

export { getAll }