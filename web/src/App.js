import React, { Component } from 'react'
import { Menu, Input, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import ReactDOM from 'react-dom'
import Header from './header.js'
import Home from './home'

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
