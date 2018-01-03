/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-01T19:15:11+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: index.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T17:19:56+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

//import  dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

//import styles
import 'semantic-ui-css/semantic.min.css'
import './index.css'

//import navbar
import Header from './Components/Header'
//import modules
import About from './Components/AboutUs'
import ForgotPassword from './Components/ForgotPassword'
import Home from './Components/Home'
import Location from './Components/Location'
import Login from './Components/Login'
import Logout from './Components/Logout'
import SignUp from './Components/SignUp'
import SetAppointment from './Components/SetAppointment'

ReactDOM.render(
  <Router>
    <div id="body">
      <Header />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Location" component={Location} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/SetAppointment" component={SetAppointment} />
      <Route exact path="/Logout" component={Logout} />
      <Route exact path="/ForgotPassword" component={ForgotPassword} />
    </div>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
