/**
 * @Author: Junar B. Alinsub
 * @Date:   2017-12-30T16:00:56+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: sms_middleware.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2017-12-30T18:02:14+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import axios from 'axios'
import moment from 'moment'

const smsOptions = {
  email: 'junaralinsub2@gmail.com',
  password: 'SmsGateway2017',
  device: '70718'
}

const postSms = async (number, message, setDate) => {
  try {
    const messageSent = await axios({
      method: 'post',
      url: 'http://smsgateway.me/api/v3/messages/send',
      data: {
        ...smsOptions,
        number: number,
        message: message,
        send_at: moment(setDate)
          .subtract(1, 'days')
          .toDate(),
        expires_at: moment(setDate).toDate()
      }
    })
  } catch (e) {
    console.log(e)
  }
}
