/**
 * @Author: Junar B. Alinsub
 * @Date:   2017-12-30T03:15:59+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: authentication.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T14:47:44+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import config from '../config'
import userModel from '../models/user'
import jwt from 'jsonwebtoken'

const authenticator = async (req, res, next) => {
  const authorizationHeader = req.headers['authorization']
  let token = ''
  if (authorizationHeader) {
    token = authorizationHeader.split(' ')[1]
  }

  if (token) {
    console.log(token)
    try {
      const withToken = await jwt.verify(token, config.SECRET)
      console.log('withtoken', withToken)

      const user = await userModel.getWhere({ user_id: withToken.user_id })
      if (!user) res.status(404).json({ error: 'Not Found' })
      else
        req.currentUser = {
          user_id: user.user_id,
          user_info_id: user.user_info_id,
          username: user.username,
          display_name: user.display_name
        }
      next()
    } catch (err) {
      res.status(401).json({ error: 'Failed to Authenticate' })
    }
  } else res.status(403).json({ error: 'Not Allowed' })
}

export default authenticator
