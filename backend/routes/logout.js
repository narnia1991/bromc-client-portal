/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:47:36+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: logout.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T09:59:01+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import express from 'express'
import { logout } from '../controllers/user'
const router = express.Router()

router.post('/', logout)

module.exports = router
