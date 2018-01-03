/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T11:17:38+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: therapist.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T11:24:01+08:00
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
  .get('/:therapist_id', authenticator, getTherapistSched)
  .get('/', authenticator, getTherapist)
  .post('/', authenticator, postTherapyOptions)

module.exports = router

