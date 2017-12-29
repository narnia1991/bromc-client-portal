/**
 * @Author: Junar B. Alinsub
 * @Date:   2017-12-24T02:31:31+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: index.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2017-12-30T04:31:23+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'semantic-ui-css/semantic.min.css'
import SetAuthorizationToken from './utils/SetAuthorizationToken'

SetAuthorizationToken(localStorage.jwtToken)
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
