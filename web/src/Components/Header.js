/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T15:29:59+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: Header.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T16:07:08+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import React, { Component } from 'react'
import { Menu, Input, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '' }
  }
  render() {
    const { activeItem } = this.state
    return (
      <Menu>
        <Menu.Item header>
          <Icon name="home" size="large" />Big River Orthopedic Massage Clinic
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/Home"
          name="home"
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/About"
          name="aboutUs"
          active={activeItem === 'aboutUs'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/Location"
          name="locations"
          active={activeItem === 'locations'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/Login"
          name="login"
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
export default Header
