/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T21:52:53+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: AccessCheck.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T21:57:12+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import config from '../config'
const AccessCheck = () => {
  if (!localStorage.getItem('jwtToken'))
    window.location.href = `${config.web}/Login`
}

export default AccessCheck
