/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-01T19:15:11+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: index.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T21:45:45+08:00
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
import SetAuthorizationToken from './utils/SetAuthorizationToken'
//import modules
import About from './Components/AboutUs'
import ForgotPassword from './Components/ForgotPassword'
import Home from './Components/Home'
import Location from './Components/Location'
import Login from './Components/Login'
import Logout from './Components/Logout'
import SignUp from './Components/SignUp'
import SetAppointment from './Components/SetAppointment'

//authenticated modules
import Billing from './Components/Client/Billing'
import MedicalHistory from './Components/Client/MedicalHistory'
import Profile from './Components/Client/Profile'
import Reservation from './Components/Client/Reservation'

if (localStorage.jwtToken) SetAuthorizationToken(localStorage.jwtToken)
ReactDOM.render(
  <Router>
    <div id="body">
      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Location" component={Location} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/SetAppointment" component={SetAppointment} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/Logout" component={Logout} />
      <Route exact path="/ForgotPassword" component={ForgotPassword} />

      <Route exact path="/Client" component={Profile} />
      <Route exact path="/Client/Profile" component={Profile} />
      <Route exact path="/Client/Billing" component={Billing} />
      <Route exact path="/Client/MedicalHistory" component={MedicalHistory} />
      <Route exact path="/Client/Reservation" component={Reservation} />
    </div>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
