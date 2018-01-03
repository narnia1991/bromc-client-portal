/**
 * @Author: Junar B. Alinsub
 * @Date:   2017-12-24T02:44:02+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: users.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T14:25:26+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import express from 'express'
import { getUser, getUsers, postUser, getTherapist } from '../controllers/user'
import authenticator from '../middlewares/authentication'
const router = express.Router()

router
  .get('/:user_id', authenticator, getUser)
  .get('/', authenticator, getUsers)
  .get('/0/therapist', authenticator, getTherapist)
  // .get('/0/employees', authenticator, getEmployees)
  .post('/', postUser)

module.exports = router
