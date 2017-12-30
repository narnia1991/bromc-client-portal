import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Menu, Sidebar, Segment, Button, Icon, Header } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'
import { FaAngleDown, FaAngleUp } from 'react-icons/lib/fa'

import routes from './../../routes'

export default class NavSidebar extends Component {
  static propTypes = {
    visible: PropTypes.bool,
  }

  state = { activeIndex: null }

  handleToggleDropdown = (index, route) => {
    if (this.state.activeIndex === index) {
      this.setState({ activeIndex: null })
    } else {
      this.setState({ activeIndex: index })
    }
  }

  render() {
    const { activeIndex } = this.state

    const { visible, match } = this.props

    return (
      <Sidebar as={Menu} animation="push" width="thin" visible={visible} icon="labeled" vertical>
        {routes &&
          routes.length > 0 &&
          routes.map((item, index) => {
            if (item.access) {
              if (item.subRoute) {
                return (
                  <Menu.Item key={index}>
                    <Menu.Header role="button" onClick={() => this.handleToggleDropdown(index)}>
                      <Icon name="home" />
                      {item.name}
                    </Menu.Header>
                    {item.subRoute && item.subRoute.length && activeIndex === index ? <FaAngleUp /> : <FaAngleDown />}

                    {item.subRoute &&
                      item.subRoute.length > 0 &&
                      item.subRoute.map((itemSub, indexSub) => {
                        return (
                          <Menu.Item
                            key={indexSub}
                            as={NavLink}
                            role="button"
                            to={itemSub.path}
                            style={{ display: activeIndex === index ? 'block' : 'none' }}
                          >
                            {itemSub.name}
                          </Menu.Item>
                        )
                      })}
                  </Menu.Item>
                )
              } else {
                return (
                  <Menu.Item name="home" key={index} role="button" as={Link} to={item.path}>
                    <Icon name="home" />
                    {item.name}
                  </Menu.Item>
                )
              }
            } else {
              return null
            }
          })}
      </Sidebar>
    )
  }
}

// if (item.access === true) {
//   if (item.subRoute) {
//     return (
//       <Menu.Item name="home" key={index} role="button" onClick={() => this.handleToggleDropdown(index)}>
//         <Icon name="home" />
//         {item.name}
//
//   {item.subRoute &&
//     item.subRoute.length && (
//       <span style={{ float: 'right' }}>
//         {this.state.activeIndex === index ? <FaAngleUp /> : <FaAngleDown />}
//       </span>
//     )}
//   {item.subRoute &&
//     item.subRoute.length > 0 && (
//       <Menu.Item name="home">
//         <Icon name="home" />
//         {item.subRoute.map((itemSub, indexSub) => {
//           if (itemSub.access === true) {
//             return (
//               <NavLink key={indexSub} className="c-sidenav__link" to={itemSub.path}>
//                 {itemSub.name}
//               </NavLink>
//             )
//           } else {
//             return null
//           }
//         })}
//       </Menu.Item>
//     )}
// </Menu.Item>
//     )
//   } else {
// return (
//   <Menu.Item name="home" key={index} role="button">
//     <Link className="c-sidenav__link" to={item.path}>
//       <Icon name="home" />
//       {item.name}
//     </Link>
//   </Menu.Item>
// )
//   }
// } else {
//   return null
// }
// })}
