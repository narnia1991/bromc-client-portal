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
  <div id="embed" align="center">
    <h1>5722 NW Edmonton Canada</h1>
    <iFrame
      width="600"
      height="450"
      frameBorder="0"
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJLX44ZVAfoFMRXxLV0XtpQKY&key=AIzaSyBd6oJjwhdjfSiImu3xN-l43JRlK2FIahs"
      allowFullScreen
    />
    <h1>6722 NW Edmonton Canada</h1>
    <iframe
      width="600"
      height="450"
      frameBorder="0"
      src="https://www.google.com/maps/embed/v1/place?q=place_id:Eic2NzIyIDE0IFN0IE5XLCBFZG1vbnRvbiwgQUIgVDZULCBDYW5hZGE&key=AIzaSyDXKH7nv_eVl4exuhSnIgjYiJ6gTiy-Bpk"
      allowFullScreen
    />
    <h1>66 Thailand Route 35 Bangkok Thailand</h1>
    <iframe
      width="600"
      height="450"
      frameborder="0"
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJc6C3p5Ci4jARpan1SYkB_ig&key=AIzaSyDm602T4OHiLSDbzGYQ8WTwpjO3jr_v_ZM"
      allowfullscreen
    />
  </div>,
]
export default Location
