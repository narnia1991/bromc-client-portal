import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { Sidebar, Segment, Header } from 'semantic-ui-react'
import NavHeader from '../NavHeader'
import NavSidebar from '../NavSidebar'

const propTypes = {
  visibility: PropTypes,
  icon: PropTypes.string,
  visible: PropTypes.bool,
}

function Layout(props) {
  const {
    routeComponent: Component,
    visibility,
    icon,
    visible,
    ...rest
  } = props

  return (
    <Route
      {...rest}
      render={props => (
        <div>
          <NavHeader visibility={visibility} icon={icon} />

          <Sidebar.Pushable
            as={Segment}
            style={{ minHeight: '100vh', marginTop: 0 }}
          >
            <NavSidebar visible={visible} {...props} />
            <Sidebar.Pusher>
              <Segment basic>
                <Component {...props} />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      )}
    />
  )
}

// class Layout extends Component {
//   static propTypes = {
//     visibility: PropTypes,
//     icon: PropTypes.string,
//     visible: PropTypes.bool,
//   }
//
//   render() {
//     const { component, visibility, icon, visible } = this.props
//
//
//   }
// }

export default Layout

{
  /* <Route
{...rest}
render={props => (
  <div>
    <NavHeader visibility={visibility} icon={icon} />

    <Sidebar.Pushable
      as={Segment}
      style={{ minHeight: '100vh', marginTop: 0 }}
    >
      <NavSidebar visible={visible} {...props} />
      <Sidebar.Pusher>
        <Segment basic>
          <Component {...props} />
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </div>
)}
/> */
}
