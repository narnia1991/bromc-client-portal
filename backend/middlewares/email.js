/**
 * @Author: Junar B. Alinsub
 * @Date:   2017-12-30T17:37:19+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: email.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2017-12-30T18:08:39+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import nodemailer from 'nodemailer'

const sendMail = (email, subject, message) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'big.river.ortho@gmail.com',
      pass: 'bigRiver@2017'
    }
  })

  const mail = {
    from: 'big.river.ortho@gmail.com',
    to: email,
    subject: subject,
    text: message
  }

  transporter.sendMail(mail, function(error, info) {
    if (error) {
      return error
    } else {
      return 'Email sent: ' + info.response
    }
  })
}
