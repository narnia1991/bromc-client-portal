/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T17:19:14+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: Logout.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T21:51:20+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import React from 'react'
import { logout } from '../Actions/AuthActions'
import config from '../config'

const Logout = () => {
  logout()
  window.location.href = `${config.web}/`
}

export default Logout
