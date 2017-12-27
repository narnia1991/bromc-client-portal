/*
* @Author: Narnia
* @Date:   2017-12-09 01:31:05
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T15:19:37+08:00
*/
import express from 'express'
import * as authController from '../controllers/auth'
import * as userController from '../controllers/user'
const router = express.Router()

router
  .get('/:id', authController.isAuthenticated, userController.getUser)
  .get('/', authController.isAuthenticated, userController.getUsers)
  .post('/', userController.postUser)

module.exports = router
