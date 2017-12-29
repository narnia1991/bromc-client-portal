/**
 * @Author: Junar B. Alinsub
 * @Date:   2017-12-30T04:21:48+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: AuthActions.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2017-12-30T04:40:42+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import axios from 'axios'
import jwt from 'jsonwebtoken'
import SetAuthorizationToken from '../utils/SetAuthorizationToken'

export const logout = () => {
  localStorage.removeItem('jwtToken')
  SetAuthorizationToken(false)
}

export const login = async data => {
  const result = await axios.post('/api/auth', data)
  const token = res.data.token
  localStorage.setItem('jwtToken', token)
  SetAuthorizationToken(token)
  console.log(jwt.decode(token))
}
