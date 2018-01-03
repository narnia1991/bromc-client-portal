/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T08:55:59+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: user.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T18:34:46+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import * as userModel from '../models/user'
import jwt from 'jsonwebtoken'
import config from '../config'
import logger from '../middlewares/logs'

//methods for routes
const postUser = async (req, res) => {
  const user = {}
  user.username = req.body.username
  user.password = userModel.hasher(req.body.password)
  try {
    const userFetched = await userModel.getWhere({ username: user.username })
    if (userFetched.length > 0)
      return res.json({ result: 'Someone has already registered that email' })
  } catch (err) {
    console.log(err)
  }
  try {
    const userCreated = await userModel.create(user)
    return res.json(userCreated)
  } catch (err) {
    return res.json(err)
  }
}

const getUsers = async (req, res) => {
  try {
    const userFetched = await userModel.getAll()
    res.json(userFetched)
  } catch (err) {
    res.json(err)
  }
}

const getUser = async (req, res) => {
  try {
    const userFetched = await userModel.getOne(req.params.user_id)
    res.json(userFetched)
  } catch (err) {
    res.json(err)
  }
}

const login = async (req, res) => {
  const { username, password } = req.body

  try {
    const userFetched = await userModel.getWhere({ username: username })
    // No user found with that username
    if (!userFetched[0]) {
      return res.status(401).json({ error: 'Invalid Credentials' })
    }
    const passwordVerified = userModel.verifyPassword(
      password,
      userFetched[0].password
    )
    if (passwordVerified) {
      const token = jwt.sign(
        {
          user_id: userFetched[0].user_id,
          user_info_id: userFetched[0].user_info_id,
          display_name: userFetched[0].display_name,
          role: userFetched[0].role
        },
        config.SECRET
      )
      console.log(jwt.decode(token))
      return res.status(200).json({ token })
      return res.status(401).json({ error: 'Invalid Credentials' })
    }
  } catch (e) {
    console.log(e)
  }
}

const logout = async (req, res) => {
  logger('access', 'logout', 'logged-out')
}

const getTherapist = async (req, res) => {
  const therapists = await userModel.getWhere({
    role: 'therapist',
    status: 'active'
  })
  res.json({ results: therapists })
}

module.exports = {
  login,
  logout,
  postUser,
  getUser,
  getUsers,
  getTherapist
}
