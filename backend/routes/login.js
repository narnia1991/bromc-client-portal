/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T03:47:29+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: login.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2017-12-30T03:55:00+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import express from 'express'
import { login } from '../controllers/user'
const router = express.Router()

router.post('/', login)

module.exports = router
