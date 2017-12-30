/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T20:46:09+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: city.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-28T06:10:29+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import { city } from '../includes/city'

const getAll = (req, res) => {
  const code = req.params.code
  const cities = city.filter(citySingle => citySingle.CountryCode === code)
  res.json({ results: cities })
}

const getOne = (req, res) => {
  const cityId = req.params.cityId
  const cityFound = city.find(citySingle => {
    if (citySingle.ID === cityId) return citySingle
  })
  res.json({ results: cityFound })
}

module.exports = { getAll, getOne }
