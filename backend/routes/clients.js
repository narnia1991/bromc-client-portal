/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T08:21:13+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: client.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T16:50:26+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

// import cors from 'cors'
import express from 'express'
import * as authController from '../controllers/auth'
import * as clientController from '../controllers/client'
const router = express.Router()

/* GET home page. */

router
  .get('/', authController.isAuthenticated, clientController.getClients)
  .post('/', authController.isAuthenticated, clientController.postClients)

module.exports = router
