/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T08:54:54+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: medical_history.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T20:19:24+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import * as historyModel from '../models/medical_history'
exports.postMedHistory = async (req, res) => {
  const history = {
    user_id: req.user.user_id,
    med_history: req.body.records,
    date_created: new Date()
  }

  try {
    const historyCreated = await historyModel.create(history)
    res.json(historyCreated)
  } catch (err) {
    res.json(err)
  }
}

exports.getLatestMedHistory = async (req, res) => {
  try {
    const historyFetched = await historyModel.getOne(req.params.id)
    res.json(historyFetched)
  } catch (err) {
    res.json(err)
  }
}

exports.getMedHistory = async (req, res) => {
  try {
    const historyFetched = await historyModel.getWhere('user_id', req.params.id)
    res.json(historyFetched)
  } catch (err) {
    res.json(err)
  }
}
