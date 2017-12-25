/*
* @Author: Narnia
* @Date:   2017-12-08 23:28:47
* @Last Modified by:   Narnia
* @Last Modified time: 2017-12-08 23:28:54
*/
const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[environment];
module.exports = require('knex')(config);

