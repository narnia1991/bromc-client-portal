/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T08:55:59+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: user.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T16:43:19+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import * as userModel from '../models/user'

exports.postUser = async (req, res) => {
  const user = {}
  user.username = req.body.username
  user.password = userModel.hasher(req.body.password)

  try {
    const userCreated = await userModel.create(user)
    console.log(userCreated)
    res.json(userCreated)
  } catch (err) {
    res.json(err)
  }
}

exports.getUser = async (req, res) => {
  console.log(req.params)
  try {
    const userFetched = await userModel.getOne(req.params.id)
    res.json(userFetched)
  } catch (err) {
    res.json(err)
  }
}

exports.getUsers = async (req, res) => {
  try {
    const userFetched = await userModel.getAll()
    res.json(userFetched)
  } catch (err) {
    res.json(err)
  }
}
