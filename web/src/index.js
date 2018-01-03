/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-01T19:15:11+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: index.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T16:06:08+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './Components/Home'
import About from './Components/AboutUs'
import Location from './Components/Location'
import Login from './Components/Login'
import Header from './Components/Header'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Location" component={Location} />
      <Route exact path="/Login" component={Login} />
    </div>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
