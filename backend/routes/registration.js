/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:48:32+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: register.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T11:27:00+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import express from 'express'
import {
  getTherapy,
  getUserInfo,
  getTherapist,
  getTherapyOptions,
  postTherapyOptions,
  confirmRegistration,
  cancelRegistration,
  billCancellation,
  postRegistration,
  getMedicalHistory
} from '../controllers/registration'
import authenticator from '../middlewares/authentication'
const router = express.Router()

router
  .get('/:registration_id', authenticator, getTherapy)
  .post('/', authenticator, postRegistration)
  .get('/:registration_id/user-info/:user_info_id', authenticator, getUserInfo)
  .get('/:registration_id/therapist/:therapist_id', authenticator, getTherapist)
  .get(
    '/:registration_id/therapy-options/:therapy_options_id',
    authenticator,
    getTherapyOptions
  )
  .get(
    '/:registration_id/medical-history/:medical_history_id',
    authenticator,
    getMedicalHistory
  )

module.exports = router
