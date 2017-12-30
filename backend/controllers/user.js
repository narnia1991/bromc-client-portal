/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T08:55:59+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: user.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2017-12-30T04:55:30+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import * as userModel from '../models/user'
import jwt from 'jsonwebtoken'
import config from '../config'
//methods to access database
const usersGetAll = async () => {
  return await userModel.getAll()
}

const userGetOne = async userId => {
  return await userModel.getWhere({ user_id: userId })
}

const userCreate = async user => {
  return await userModel.create(user)
}

const usersGetWhere = async where => {
  return await userModel.getWhere(where)
}

//methods for routes
const postUser = async (req, res) => {
  const user = {}
  user.username = req.body.username
  user.password = userModel.hasher(req.body.password)
  console.log(user)
  try {
    const userFetched = await userModel.getWhere({ username: user.username })
    console.log(userFetched)
    if (userFetched.length > 0)
      return res.json({ result: 'Someone has already registered that email' })
  } catch (err) {
    console.log(err)
  }
  try {
    console.log(user)
    const userCreated = await userModel.create(user)
    console.log(userCreated)
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
    const userFetched = userGetOne(req.params.id)
    res.json(userFetched)
  } catch (err) {
    res.json(err)
  }
}

const login = async (req, res) => {
  const { username, password } = req.body

  try {
    console.log(username)
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
          display_name: userFetched[0].display_name,
          role: userFetched[0].role
        },
        config.SECRET
      )
      return res.status(200).json({ token })
      return res.status(401).json({ error: 'Invalid Credentials' })
    }
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  usersGetAll,
  userGetOne,
  userCreate,
  login,
  postUser,
  getUser,
  getUsers
}
