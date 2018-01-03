/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T17:50:29+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: AuthActions.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T20:30:12+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
/**
 * @Author: Junar B. Alinsub
 * @Date:   2017-12-30T04:21:48+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: AuthActions.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T20:30:12+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import axios from 'axios'
import config from '../config'
import jwtDecode from 'jwt-decode'
import SetAuthorizationToken from '../utils/SetAuthorizationToken'

export const logout = () => {
  localStorage.removeItem('jwtToken')
  SetAuthorizationToken(false)
}

export const login = async data => {
  console.log('inside login', data, `${config.api}/auth`)
  const result = await axios({
    method: 'post',
    url: `${config.api}/auth`,
    data: data
  })
  const token = result.data.token
  if (token) {
    localStorage.setItem('jwtToken', token)
    SetAuthorizationToken(token)
    return true
  } else return false
}
