/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T20:43:13+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: country.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-28T06:22:08+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import express from 'express'
import * as authController from '../controllers/auth'
import * as cityController from '../controllers/city'
import * as countryController from '../controllers/country'
const router = express.Router()

router
  .get('/', authController.isAuthenticated, countryController.getAll)
  .get('/:code', authController.isAuthenticated, countryController.getOne)
  .get('/:code/city', authController.isAuthenticated, cityController.getAll)
  .get(
    '/:code/city/:cityId',
    authController.isAuthenticated,
    cityController.getOne
  )

module.exports = router
