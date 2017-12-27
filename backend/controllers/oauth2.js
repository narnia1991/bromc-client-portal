/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T17:10:49+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: oauth2.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T18:29:36+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import oauth2orize from 'oauth2orize'
import * as userModel from '../models/user'
import * as clientModel from '../models/client'
import * as tokenModel from '../models/access_tokens'
import * as codeModel from '../models/code'

const server = oauth2orize.createServer()

// Register serialialization function
server.serializeClient((client, done) => {
  return done(null, client.id)
})

// Register deserialization function
server.deserializeClient(async (id, done) => {
  const clientfetched = await clientModel.getWhere({ id: id })
  if (!clientFetched) return done(null, false)
  return done(null, client)
})

// Register authorization code grant type
server.grant(
  oauth2orize.grant.code(async (client, redirectUri, user, ares, done) => {
    // Create a new authorization code
    var code = {
      value: uid(16),
      clientId: client.id,
      redirectUri: redirectUri,
      userId: user.user_id
    }

    // Save the auth code and check for errors
    const codeCreated = codeModel.create(code)
    if (!codeCreated) {
      return done(null, false)
    }
    return done(null, code.value)
  })
)

// Exchange authorization codes for access tokens
server.exchange(
  oauth2orize.exchange.code(async (client, code, redirectUri, done) => {
    const codeFetched = codeModel.getWhere({ value: code })
    if (!codeFetched) return done(null, false)
    if (client.id.toString() !== codeFetched.client_id) return done(null, false)
    if (redirectUri !== codeFetched.redirect_uri) return callback(null, false)
    const codeDeleted = codeModel.delete(codeFetched.value)
    // Create access token
    var token = {
      value: uid(256),
      clientId: codeFetched.client_id,
      userId: codeFetched.user_id
    }
    // Save token
    const tokenSaved = tokenModel.create(token)
    if (!tokenSaved) return done(null, false)
    return done(null, token)
  })
)

// User authorization endpoint
exports.authorization = [
  server.authorization(async (clientId, redirectUri, done) => {
    const clientFetched = clientModel.getWhere({ id: clientId })
    if (!clientFetched) return done(null, false)
    return done(null, client, redirectUri)
  }),
  function(req, res) {
    res.json({
      transactionID: req.oauth2.transactionID,
      user: req.user,
      client: req.oauth2.client
    })
  }
]

exports.decision = [server.decision()]

exports.token = [server.token(), server.errorHandler()]

const uid = len => {
  var buf = [],
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    charlen = chars.length

  for (var i = 0; i < len; ++i) {
    buf.push(chars[getRandomInt(0, charlen - 1)])
  }

  return buf.join('')
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
