/*
* @Author: Narnia
* @Date:   2017-12-09 01:31:05
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2017-12-30T05:07:29+08:00
*/
import express from 'express'
import * as userController from '../controllers/user'
const router = express.Router()

router
  .get('/:id', userController.getUser)
  .get('/', userController.getUsers)
  .post('/', userController.postUser)

module.exports = router
