import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import asyncComponent from './containers/AsyncComponent'
import PageNotFound from './components/PageNotFound'
import Layout from './components/Layout'

const AsyncLogin = asyncComponent(() => import('./components/Login'))
const AsyncDashboard = asyncComponent(() => import('./containers/Dashboard'))

class App extends Component {
  state = { activeItem: 'home', visible: false, icon: 'content', dateTime: '' }

  previousLocation = this.props.location

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
              path="/dashboard"
              routeComponent={AsyncDashboard}
              visible={visible}
              visibility={() => this.toggleVisibility}
              icon={icon}
            />
            <Layout
              path="/reports"
              routeComponent={AsyncDashboard}
              visible={visible}
              visibility={() => this.toggleVisibility}
              icon={icon}
            />
            <Layout
              path="/accounts"
              routeComponent={AsyncDashboard}
              visible={visible}
              visibility={() => this.toggleVisibility}
              icon={icon}
            />
            <Layout
              path="/schedule"
              routeComponent={AsyncDashboard}
              visible={visible}
              visibility={() => this.toggleVisibility}
              icon={icon}
            />
            <Layout
              path="/clients"
              routeComponent={AsyncDashboard}
              visible={visible}
              visibility={() => this.toggleVisibility}
              icon={icon}
            />
            <Layout
              path="/leaves"
              routeComponent={AsyncDashboard}
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

export default App
