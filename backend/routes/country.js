/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T20:43:13+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: country.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T22:08:11+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import express from 'express'
import * as cityController from '../controllers/city'
import * as countryController from '../controllers/country'
const router = express.Router()

router
  .get('/', countryController.getAll)
  .get('/:code', countryController.getOne)
  .get('/:code/city', cityController.getAll)
  .get('/:code/city/:cityId', cityController.getOne)

module.exports = router
