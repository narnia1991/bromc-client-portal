/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T08:54:41+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: logs.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T11:25:19+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import * as logs from '../models/logs'

const getLogs = async (req, res) => {
  try {
    const logFetched = await logs.getLogs()
    res.json({ results: logFetched })
  } catch (err) {
    res.json({ errors: err })
  }
}

module.exports = { getLogs }
