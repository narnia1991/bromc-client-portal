/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:49:34+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: therapy_details.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T10:46:13+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import express from 'express'
import {
  getLatestTherapyOptions,
  getTherapyOptions,
  postTherapyOptions
} from '../controllers/thersess_options'
import authenticator from '../middlewares/authentication'
const router = express.Router()

router
  .get('/:user_id', authenticator, getTherapyOptions)
  .get('/:user_id/latest', authenticator, getLatestTherapyOptions)
  .post('/', authenticator, postTherapyOptions)

module.exports = router
