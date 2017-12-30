/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:48:45+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: change_password.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T03:48:45+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import express from 'express'
import * as passwordController from '../controllers/password_history'
const router = express.Router()

/* GET home page. */

router
  .get('/', passwordController.getPasswords)
  .post('/', passwordController.postPassword)

module.exports = router
