/**
 * @Author: Junar B. Alinsub
 * @Date:   2017-12-30T03:15:59+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: authentication.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2017-12-30T05:06:44+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import config from '../config'
import user from '../models/user'

const authenticator = async (req, res, next) => {
  const authorizationHeader = req.headers['authorization']
  let tokenModel
  if (authorizationHeader) token = authorizationHeader.split(' ')[1]

  if (token) {
    try {
      const withToken = await jwt.verify(token, config.SECRET)
      req.userId = withToken.user_id
      next()
    } catch (err) {
      res.status(401).json({ error: 'Failed to Authenticate' })
    }
  } else res.status(403).json({ error: 'Not Allowed' })
}
}
