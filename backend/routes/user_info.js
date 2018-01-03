/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:49:11+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: user_info.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T10:10:22+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import express from 'express'
import {
  getUserInfo,
  getUsersInfo,
  postUserInfo,
  putUserInfo
} from '../controllers/user_info'
import authenticator from '../middlewares/authentication'
const router = express.Router()

router
  .get('/:user_id', authenticator, getUserInfo)
  .post('/', authenticator, postUserInfo)
  .put('/', authenticator, putUserInfo)

module.exports = router
