/**
 * @Author: Junar B. Alinsub
 * @Date:   2017-12-30T04:25:41+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: SetAuthorizationToken.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2017-12-30T04:28:34+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import axios from 'axios'

const SetAuthorizationToken = token => {
  if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  else delete axios.defaults.headers.common['Authorization']
}

export default SetAuthorizationToken

