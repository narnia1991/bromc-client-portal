/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T06:05:09+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: feedback.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T08:25:57+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import * as feedback from '../models/feedback'

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
