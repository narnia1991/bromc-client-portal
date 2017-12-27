/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T08:54:03+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: client.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T16:53:45+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import * as clientModel from '../models/client'

const getClients = async (req, res) => {
  console.log(req.user)
  try {
    const clientFetched = await clientModel.getWhere({
      user_id: req.user.user_id
    })
    res.json(clientFetched)
  } catch (err) {
    res.json(err)
  }
}

const postClients = async (req, res) => {
  let client = {}

  client.name = req.body.name
  client.id = req.body.id
  client.secret = req.body.secret
  client.user_id = req.user.user_id

  try {
    const clientCreated = await clientModel.create(client)
    res.json(clientCreated)
  } catch (err) {
    res.json(err)
  }
}

module.exports = { getClients, postClients }
