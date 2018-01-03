/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T15:29:59+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: Location.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T16:04:00+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Embed } from 'semantic-ui-react'
const Location = () => (
  <div>
    <Embed url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25354.94046166276!2d-121.97574860000002!3d37.40478635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc9c6db85b8ab%3A0x72af1434e8036575!2sCalifornia&#39;s+Great+America!5e0!3m2!1sen!2sus!4v1509633245458" />
  </div>
)
export default Location
