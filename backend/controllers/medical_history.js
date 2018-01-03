/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T08:54:54+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: medical_history.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T09:49:06+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import * as historyModel from '../models/medical_history'

const postMedHistory = async (req, res) => {
  const history = {
    user_id: req.params.user_id,
    med_history: req.body.records,
    date_created: new Date()
  }
  try {
    const historyCreated = await historyModel.create(history)
    res.json({ results: 'Successfully Posted' })
  } catch (err) {
    res.json({ errors: err })
  }
}

const getLatestMedHistory = async (req, res) => {
  try {
    const historyFetched = await historyModel.getWhere({
      user_id: req.params.user_id
    })
    res.json({ results: historyFetched })
  } catch (err) {
    res.json({ errors: err })
  }
}

const getMedHistory = async (req, res) => {
  try {
    const historyFetched = await historyModel.getWhere(
      'user_id',
      req.params.user_id
    )
    res.json({ results: historyFetched })
  } catch (err) {
    res.json({ errors: err })
  }
}

module.exports = {
  getLatestMedHistory,
  getMedHistory,
  postMedHistory
}
