/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T19:27:34+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: schedule.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T19:40:10+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import express from 'express'
import { getSchedule } from '../controllers/registration'
import authenticator from '../middlewares/authentication'
const router = express.Router()

router.get('/schedule/:user_id', authenticator, getSchedule)

module.exports = router
