/**
 * @Author: Junar B. Alinsub <Narnia1991>
 * @Date:   2017-12-27T10:38:56+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: auth.js
 * @Last modified by:   Narnia1991
 * @Last modified time: 2017-12-27T18:33:33+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import passport from 'passport'
import { BasicStrategy } from 'passport-http'
import BearerStrategy from 'passport-http-bearer'

//Models
import * as clientModel from '../models/client'
import * as userModel from '../models/user'
import * as tokenModel from '../models/access_tokens'

passport.use(
  new BasicStrategy(async (username, password, done) => {
    const userFetched = await userModel.getWhere({ username: username })
    // No user found with that username
    if (!userFetched[0]) {
      return done(null, false, { message: 'Incorrect username/password' })
    }

    const passwordVerified = userModel.verifyPassword(
      password,
      userFetched[0].password
    )

    if (passwordVerified) return done(null, userFetched[0])
    return done(null, false, { message: 'Incorrect username/password' })
  })
)

passport.use(
  'client-basic',
  new BasicStrategy(async (username, password, done) => {
    const clientFetched = await clientModel.getOne({ id: username })
    // No client found or bad password
    if (!clientFetched || clientFetched.secret !== password) {
      return done(null, false)
    }
    // Success
    return done(null, clientFetched)
  })
)

passport.use(
  new BearerStrategy(async (accessToken, done) => {
    const tokenFetched = tokenModel.getWhere({ value: accessToken })
    if (!tokenFetched) {
      return done(null, false)
    }
    const userFetched = await User.getWhere({ user_id: token.user_id })
    if (!userFetched) {
      return done(null, false)
    }

    return done(null, userFetched, { scope: '*' })
  })
)

exports.isClientAuthenticated = passport.authenticate(['client-basic'], {
  session: false
})
exports.isAuthenticated = passport.authenticate(['basic', 'bearer'], {
  session: false
})
