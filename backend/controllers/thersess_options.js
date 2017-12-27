/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T08:55:44+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: thersess_options.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T20:33:12+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import * as therSessModel from '../models/thersess_options'
exports.postTherapyOptions = async (req, res) => {
  const therapy = {
    options_id: req.user.user_id,
    options_therapy_id: req.body.therapyId,
    options_preference: req.body.preference,
    date_created: new Date()
  }

  try {
    const historyCreated = await historyModel.create(history)
    res.json(historyCreated)
  } catch (err) {
    res.json(err)
  }
}

exports.getLatestTherapyOptions = async (req, res) => {
  try {
    const historyFetched = await historyModel.getOne(req.params.id)
    res.json(historyFetched)
  } catch (err) {
    res.json(err)
  }
}

exports.getTherapyOptions = async (req, res) => {
  try {
    const historyFetched = await historyModel.getWhere('user_id', req.params.id)
    res.json(historyFetched)
  } catch (err) {
    res.json(err)
  }
}
