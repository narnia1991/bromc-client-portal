import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import routes from './../../routes'

class Dashboard extends Component {
  render() {
    return (
      <Switch>
        {routes.map((route, index) => {
          if (route.access === true && route.subRoute) {
            return route.subRoute.map((subRoute, subIndex) => {
              if (subRoute.access === true) {
                if (subRoute.rootPath) {
                  return (
                    <Route
                      key={subIndex}
                      {...subRoute}
                      path={subRoute.rootPath}
                    />
                  )
                } else {
                  return (
                    <Route
                      key={subIndex}
                      {...subRoute}
                      path={`${route.path}/${subRoute.path}`}
                    />
                  )
                }
              } else {
                return null
              }
            })
          } else if (route.access === true) {
            return <Route key={index} {...route} />
          } else {
            return null
          }
        })}

        <Redirect
          to={{
            state: { error: true },
          }}
        />
      </Switch>
    )
  }
}

export default Dashboard
