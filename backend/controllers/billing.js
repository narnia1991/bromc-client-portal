/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T22:17:21+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: billing.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-04T00:08:44+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import * as billingModel from '../models/billing'

const getBilling = async (req, res) => {
  try {
    const billingFetched = await billingModel.getWhere({
      user_id: req.params.user_id
    })
    res.json({ results: billingFetched })
  } catch (err) {
    res.json(err)
  }
}

const postBilling = async (req, res) => {
  console.log(req.body)
  let billing = {
    user_id: req.params.user_id,
    card_no: req.body.card_no,
    validity: req.body.validity,
    cvv: req.body.cvv,
    name: req.body.name,
    address: req.body.address,
    date_created: new Date()
  }
  try {
    const billingCreated = await billingModel.create(billing)
    res.json({ results: 'Saved' })
  } catch (err) {
    res.json({ errors: err })
  }
}
const putBilling = async (req, res) => {
  let billing = {
    user_id: req.params.user_id,
    card_no: req.body.card_no,
    validity: req.body.validity,
    cvv: req.body.cvv,
    name: req.body.name,
    address: req.body.address,
    date_update: new Date()
  }
  try {
    const billingUpdated = await billingModel.update(
      req.params.billing_id,
      billing
    )
    res.json({ results: 'Successfully Updated' })
  } catch (err) {
    res.json({ errors: err })
  }
}

module.exports = { getBilling, postBilling, putBilling }
