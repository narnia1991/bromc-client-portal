/**
 * @Author: Junar B. Alinsub
 * @Date:   2017-12-30T03:15:59+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: authentication.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T10:04:43+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import config from '../config'
import { postLog } from '../models/logs'

const logger = async (logtype, action, changes) => {
  let log = {}

  log.log_ip =
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null)
  log.log_user = req.currentUser.user_id || 0
  log.log_type = logtype || 'audit'
  log.log_date = new Date()
  log.log_endpoint = req.url
  log.log_action = action
  log.log_changes = changes

  try {
    const result = await postLog(log)
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

export default logger
