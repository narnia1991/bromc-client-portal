/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T15:29:59+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: Header.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T21:54:35+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { term: '', isLoggedIn: true }
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
          to="/Client/Profile"
          name="Profile"
          active={activeItem === 'Profile'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/Client/Billing"
          name="Billing"
          active={activeItem === 'Billing'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/Client/MedicalHistory"
          name="MedicalHistory"
          active={activeItem === 'MedicalHistory'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/Client/Reservation"
          name="Reservation"
          active={activeItem === 'Reservation'}
          onClick={this.handleItemClick}
        />

        <div class="right menu">
          <Menu.Item
            as={Link}
            to="/Logout"
            name="Logout"
            active={activeItem === 'Logout'}
            onClick={this.handleItemClick}
          />
        </div>
      </Menu>
    )
  }
}
export default Header
