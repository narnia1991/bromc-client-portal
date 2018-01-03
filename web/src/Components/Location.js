/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T15:29:59+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: Location.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T20:42:21+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import React from 'react'
import { iFrame } from 'semantic-ui-react'
import Header from './Header'
const Location = () => [
  <Header />,
  <div id="embed">
    <iFrame
      width="100%"
      height="700"
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJLX44ZVAfoFMRXxLV0XtpQKY&key=AIzaSyBd6oJjwhdjfSiImu3xN-l43JRlK2FIahs"
    />
  </div>
]
export default Location
