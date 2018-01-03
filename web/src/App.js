/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-01T19:15:10+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: App.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T15:51:47+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import React, { Component } from 'react'
import { Menu, Input, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import ReactDOM from 'react-dom'
import Header from './Components/Header'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}
export default App
