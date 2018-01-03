/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T17:11:40+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: login.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T17:49:59+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import axios from 'axios'

const postLogin = (username, password) => {}

import axios from 'axios'
import config from '../config'

export const deleteNews = async data => {
  const newsDelete = await axios({
    method: 'post',
    url: `${config.api}/auth`
  })
  return newsDelete
}
