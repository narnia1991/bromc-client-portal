import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { Sidebar, Segment, Header } from 'semantic-ui-react'
import NavHeader from '../NavHeader'
import NavSidebar from '../NavSidebar'

const propTypes = {
  routeComponent: PropTypes.node,
  visibility: PropTypes.func,
  icon: PropTypes.string,
  visible: PropTypes.bool,
}

function Layout(propTypes) {
  const {
    routeComponent: Component,
    visibility,
    icon,
    visible,
    ...rest
  } = propTypes

  return (
    <Route
      {...rest}
      render={propTypes => (
        <div>
          <NavHeader visibility={visibility} icon={icon} />

          <Sidebar.Pushable
            as={Segment}
            style={{ minHeight: '100vh', marginTop: 0 }}
          >
            <NavSidebar visible={visible} {...propTypes} />
            <Sidebar.Pusher>
              <Segment basic>
                <Component {...propTypes} />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      )}
    />
  )
}

export default Layout
