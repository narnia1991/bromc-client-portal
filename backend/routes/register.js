/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:48:32+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: register.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T20:28:00+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import express from 'express'
import * as userInfoController from '../controllers/user_info'
import * as userController from '../controllers/user'
import * as medHisController from '../controllers/medical_history'
import * as therSessController from '../controllers/thersess_options'
import * as registerController from '../controllers/registration'

const router = express.Router()

router
  .get('/:id', userController.getUser)
  .post('/', userController.postUser)
  .get('/:id/user-info', userController.getUserInfo)
  .post('/user-info', userInfoController.postUserInfo)
  .put('/:id/user-info', userInfoController.putUserInfo)
  .get('/:id/medical-history/latest', medHisController.getLatestMedHistory)
  .get('/:id/medical-history', medHisController.getMedHistory)
  .post('/medical-history', medHisController.postMedHistory)
  .get(
    '/:therapyId/therapy-options',
    therSessController.getLatestTherapyOptions
  )
  .post('/therapy-options', therSessController.postTherapyOptions)

module.exports = router
  .post('/therapy-options', therSessController.postTherapyOptions)

module.exports = router
