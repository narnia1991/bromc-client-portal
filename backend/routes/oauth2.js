/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T17:47:06+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: oauth2.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T18:59:00+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import express from 'express'
import * as authController from '../controllers/auth'
import * as oauth2Controller from '../controllers/oauth2'
console.log(authController)
const router = express.Router()
router
  .get(
    '/authorize',
    authController.isAuthenticated,
    oauth2Controller.authorization
  )
  .post('/authorize', authController.isAuthenticated, oauth2Controller.decision)

router.post(
  '/token',
  authController.isClientAuthenticated,
  oauth2Controller.token
)
