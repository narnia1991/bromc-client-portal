/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T05:54:09+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: reports.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T11:30:04+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import express from 'express'
import {
  getVolume,
  getVolumeWeekly,
  getVolumeMonthly,
  getVolumeYearly
} from '../controllers/registration'
import { getFeedbacks, getFeedback } from '../controllers/feedback'
import authenticator from '../middlewares/authentication'
const router = express.Router()

router
  .get('/volume', authenticator, getVolume)
  .get('/volume/weekly/:week', authenticator, getVolumeWeekly)
  .get('/volume/monthly/:month', authenticator, getVolumeMonthly)
  .get('/volume/yearly/:year', authenticator, getVolumeYearly)
// .get('/feedback', authenticator, getFeedbacks)
// .get('/feedback/:feedback_id', authenticator, getFeedback)

module.exports = router
