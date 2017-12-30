/*
* @Author: Narnia
* @Date:   2017-12-08 23:28:47
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T08:42:26+08:00
*/
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
module.exports = require('knex')(config)
