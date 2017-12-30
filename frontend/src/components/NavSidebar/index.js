import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Input,
  Menu,
  Sidebar,
  Segment,
  Button,
  Icon,
  Header,
} from 'semantic-ui-react'
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
      <Sidebar
        as={Menu}
        animation="push"
        width="thin"
        visible={visible}
        icon="labeled"
        vertical
      >
        {routes &&
          routes.length > 0 &&
          routes.map((item, index) => {
            if (item.access) {
              if (item.subRoute) {
                return (
                  <Menu.Item key={index}>
                    <Menu.Header
                      role="button"
                      onClick={() => this.handleToggleDropdown(index)}
                    >
                      <Icon name="home" />
                      {item.name}
                    </Menu.Header>
                    {item.subRoute &&
                    item.subRoute.length &&
                    activeIndex === index ? (
                      <FaAngleUp />
                    ) : (
                      <FaAngleDown />
                    )}

                    {item.subRoute &&
                      item.subRoute.length > 0 &&
                      item.subRoute.map((itemSub, indexSub) => {
                        return (
                          <Menu.Item
                            key={indexSub}
                            // as={NavLink}
                            // role="button"
                            // to={itemSub.path}
                            style={{
                              display: activeIndex === index ? 'block' : 'none',
                            }}
                          >
                            <NavLink to={itemSub.path}>{itemSub.name}</NavLink>
                          </Menu.Item>
                        )
                      })}
                  </Menu.Item>
                )
              } else {
                return (
                  <Menu.Item
                    key={index}
                    // as={NavLink} to={item.path}
                  >
                    <Icon name="home" />
                    <NavLink to={item.path}> {item.name}</NavLink>
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
