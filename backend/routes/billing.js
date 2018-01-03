/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T22:07:51+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: billing.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T22:29:42+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import express from 'express'
import { getBilling, postBilling, putBilling } from '../controllers/billing'
import authenticator from '../middlewares/authentication'

const router = express.Router()

router
  .get('/:user_id', authenticator, billingController.getBilling)
  .post('/:user_id', authenticator, billingController.postBilling)
  .put('/:user_id/:billing_id', authenticator, billingController.putBilling)

module.exports = router
