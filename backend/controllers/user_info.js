/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T08:55:53+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: user_info.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T10:06:45+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import * as userInfoModel from '../models/user_info'

const postUserInfo = async (req, res) => {
  const user = {
    first_name: req.body.first_name,
    middle_name: req.body.middle_name,
    last_name: req.body.last_name,
    address_1: req.body.address_1,
    address_2: req.body.address_2,
    city: req.body.city,
    country: req.body.country,
    phone_number: req.body.phone_number,
    cell_number: req.body.cell_number,
    birth_date: req.body.birth_date,
    e_mail: req.body.email,
    date_created: new Date(),
    date_updated: new Date()
  }

  try {
    const userCreated = await userInfoModel.create(user)
    console.log(userCreated)
    res.json(userCreated)
  } catch (err) {
    res.json(err)
  }
}

const getUserInfo = async (req, res) => {
  try {
    const userFetched = await userInfoModel.getOne(req.params.user_id)
    res.json(userFetched)
  } catch (err) {
    res.json(err)
  }
}

const putUserInfo = async (req, res) => {
  user_id = req.params.user_id

  const user = {
    first_name: req.body.first_name,
    middle_name: req.body.middle_name,
    last_name: req.body.last_name,
    address_1: req.body.address_1,
    address_2: req.body.address_2,
    city: req.body.city,
    country: req.body.country,
    phone_number: req.body.phone_number,
    cell_number: req.body.cell_number,
    date_updated: new Date()
  }

  try {
    const userCreated = await userInfoModel.update(user_id, user)
    res.json(userCreated)
  } catch (err) {
    res.json(err)
  }
}

module.exports = { getUserInfo, postUserInfo, putUserInfo }
