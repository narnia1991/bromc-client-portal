/**
 * @Author: Junar B. Alinsub
 * @Date:   2017-12-30T14:47:49+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: logs.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T11:24:27+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import express from 'express'
import { getLogs } from '../controllers/logs'
import authenticator from '../middlewares/authentication'

const router = express.Router()

router.get('/', authenticator, getLogs)

module.exports = router
