/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T22:05:07+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: BillingActions.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-04T00:31:20+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import axios from 'axios'
import config from '../config'

export const BillingCheckAction = async () => {
  const billing = await axios({
    method: 'get',
    url: `${config.api}/billing/${localStorage.getItem('user_id')}`
  })
  console.log(billing.data.results[0])
  return billing.data.results[0]
}

export const BillingSubmitAction = async data => {
  console.log(data)
  const billing = await axios({
    method: 'post',
    url: `${config.api}/billing/${localStorage.getItem('user_id')}`,
    data: data
  })
  return billing.data.results[0]
}
