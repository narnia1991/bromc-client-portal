import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import asyncComponent from './containers/AsyncComponent'
import PageNotFound from './components/PageNotFound'
import Layout from './components/Layout'

const AsyncLogin = asyncComponent(() => import('./components/Login'))
const AsyncDashboard = asyncComponent(() => import('./containers/Dashboard'))

class App extends Component {
  state = { activeItem: 'home', visible: false, icon: 'content', dateTime: '' }

  previousLocation = this.props.location

  componentWillUpdate(nextProps) {
    const { location } = this.props
    console.log(location, 'LOCATION')
    // if (nextProps.history.action !== 'POP' && (!location.state || !location.state.error)) {
    //   this.previousLocation = this.props.location
    // }
  }

  toggleVisibility = () =>
    this.setState({
      visible: !this.state.visible,
      icon: this.state.icon === 'content' ? 'close' : 'content',
    })

  render() {
    const { location } = this.props
    const { activeItem, visible, icon, dateTime } = this.state

    const isError = !!(location && this.previousLocation !== location)

    return (
      <div style={{ height: '100%', background: '#eee' }}>
        {isError ? (
          <Route component={PageNotFound} />
        ) : (
          <Switch location={isError ? this.previousLocation : location}>
            <Layout
              path="/reports"
              component={AsyncDashboard}
              visible={visible}
              visibility={() => this.toggleVisibility}
              icon={icon}
            />
            <Layout
              path="/schedule"
              component={AsyncDashboard}
              visible={visible}
              visibility={() => this.toggleVisibility}
              icon={icon}
            />
            <Layout
              path="/accounts"
              component={AsyncDashboard}
              visible={visible}
              visibility={() => this.toggleVisibility}
              icon={icon}
            />
            <Route exact path="/" component={AsyncLogin} />
          </Switch>
        )}
      </div>
    )
  }
}

App = connect(state => ({
  location: state.location,
}))(App)

export default App
