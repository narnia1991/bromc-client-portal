/**
 * @Author: Junar B. Alinsub
 * @Date:   2017-12-30T14:47:20+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: medical_history.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T10:05:57+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import express from 'express'
import {
  getLatestMedHistory,
  getMedHistory,
  postMedHistory
} from '../controllers/medical_history'

const router = express.Router()

router
  .get('/:user_id/medical-history/latest', getLatestMedHistory)
  .get('/:user_id/medical-history', getMedHistory)
  .post('/medical-history', postMedHistory)

module.exports = router
