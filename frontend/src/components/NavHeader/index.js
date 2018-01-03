import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Menu, Icon } from 'semantic-ui-react'
import { getDateTime } from '../../utils/dateLoader'
import { Link } from 'react-router-dom'
import { unsetAccount } from '../../actions/AccountAction'

import history from '../../history'

class NavHeader extends Component {
  state = { activeItem: 'home', icon: 'content', dateTime: '' }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        dateTime: getDateTime(),
      })
    }, 1000)
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogout = () => {
    this.props.unsetAccount('/logout')

    localStorage.removeItem('jwtToken')

    const token = localStorage.getItem('jwtToken')
    if (!token) {
      history.push('/login')
    }
  }

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
          as={Link}
          to="/dashboard"
        >
          <Icon name="home" size="big" style={{ margin: 0 }} />
        </Menu.Item>

        <Menu.Menu position="right">
          <div style={{ margin: 'auto 15px' }}>{dateTime}</div>
          <Menu.Item>Name (Position)</Menu.Item>
          <Menu.Item
            name="logout"
            active={activeItem === 'logout'}
            onClick={this.handleLogout}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}

NavHeader = connect(
  state => ({
    access: state.access,
    // pull initial values from account reducer
  }),
  { unsetAccount } // bind account loading action creator
)(NavHeader)

export default NavHeader
