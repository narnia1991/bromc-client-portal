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
import { getDateTime } from '../../utils/dateLoader'

export default class NavHeader extends Component {
  state = { activeItem: 'home', icon: 'content', dateTime: '' }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        dateTime: getDateTime(),
      })
    }, 1000)
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { visibility, icon } = this.props
    const { activeItem, dateTime } = this.state

    return (
      <Menu attached="top">
        <Menu.Item
          name="menu"
          active={activeItem === 'menu'}
          onClick={this.handleItemClick}
        >
          <Icon
            name={icon}
            size="big"
            style={{ margin: 0 }}
            onClick={visibility()}
          />
        </Menu.Item>

        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          <Icon name="home" size="big" style={{ margin: 0 }} />
        </Menu.Item>

        <Menu.Menu position="right">
          <div style={{ margin: 'auto 15px' }}>{dateTime}</div>
          <Menu.Item>Name (Position)</Menu.Item>
          <Menu.Item
            name="logout"
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}
