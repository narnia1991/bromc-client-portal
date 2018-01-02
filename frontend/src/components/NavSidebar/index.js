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

const routes = [
  {
    name: 'Reports',
    path: '/reports',
    exact: true,
    access: true,
  },
  {
    name: 'Schedule',
    path: '/schedule',
    exact: true,
    access: true,
  },
  {
    name: 'Leaves',
    path: '/leaves',
    exact: true,
    access: true,
  },
  {
    name: 'Accounts',
    path: '/accounts',
    exact: true,
    access: true,
  },
  {
    name: 'Clients',
    path: '/clients',
    exact: true,
    access: true,
  },
]

export default class NavSidebar extends Component {
  static propTypes = {
    visible: PropTypes.bool,
  }

  state = { activeIndex: null, activeItem: '' }

  handleToggleDropdown = (index, name) => {
    if (this.state.activeIndex === index) {
      this.setState({ activeIndex: null })
    } else {
      this.setState({ activeIndex: index })
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem, activeIndex } = this.state

    const { visible, match } = this.props

    return (
      <Sidebar animation="push" width="thin" visible={visible} icon="labeled">
        <Menu fluid vertical tabular>
          {routes &&
            routes.length > 0 &&
            routes.map((item, index) => {
              if (item.access) {
                if (item.subRoute) {
                  return (
                    <Menu.Item
                      key={index}
                      name={item.name}
                      active={activeItem === item.name}
                      // role="button"
                    >
                      <Menu.Header
                        onClick={() => {
                          this.handleToggleDropdown(index), this.handleItemClick
                        }}
                      >
                        {item.name}
                        {item.subRoute &&
                        item.subRoute.length &&
                        activeItem === item.name ? (
                          <FaAngleUp />
                        ) : (
                          <FaAngleDown />
                        )}
                      </Menu.Header>
                      {item.subRoute &&
                        item.subRoute.length > 0 &&
                        item.subRoute.map((itemSub, indexSub) => {
                          return (
                            <Menu.Menu key={indexSub}>
                              <Menu.Item
                                // as={NavLink}
                                // role="button"
                                // to={itemSub.rootPath || itemSub.path}
                                style={{
                                  display:
                                    activeIndex === index ? 'block' : 'none',
                                }}
                                name={itemSub.name}
                                active={activeItem === itemSub.name}
                              >
                                <Link to={itemSub.rootPath || itemSub.path}>
                                  {itemSub.name}
                                </Link>
                              </Menu.Item>
                            </Menu.Menu>
                          )
                        })}
                    </Menu.Item>
                  )
                } else {
                  return (
                    <Menu.Item
                      key={index}
                      as={NavLink}
                      to={item.path}
                      name={item.name}
                      active={activeItem === item.name}
                      onClick={this.handleItemClick}
                    >
                      <Menu.Header>{item.name}</Menu.Header>
                    </Menu.Item>
                  )
                }
              } else {
                return null
              }
            })}
        </Menu>
      </Sidebar>
    )
  }
}
