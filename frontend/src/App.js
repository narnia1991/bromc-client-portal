import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import Main from './containers'

class App extends Component {
  render() {
    return <Route component={Main} />
  }
}

export default App
