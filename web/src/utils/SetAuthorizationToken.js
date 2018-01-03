/**
 * @Author: Junar B. Alinsub
 * @Date:   2017-12-30T04:25:41+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: SetAuthorizationToken.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T23:18:33+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import axios from 'axios'
import jwtDecode from 'jwt-decode'

const SetAuthorizationToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    const currentUser = jwtDecode(token)
    localStorage.setItem('user_id', currentUser.user_id)
  } else {
    delete axios.defaults.headers.common['Authorization']
    localStorage.removeItem('user_id')
  }
}

export default SetAuthorizationToken
