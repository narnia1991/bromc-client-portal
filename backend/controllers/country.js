/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T20:46:02+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: country.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-28T06:07:28+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import { country } from '../includes/country'

const getAll = (req, res) => {
  res.json({ results: country })
}

const getOne = (req, res) => {
  const code = req.params.code
  const countryFound = country.find(countrySingle => countrySingle.Code == code)
  res.json({ results: countryFound })
}

module.exports = { getAll, getOne }
