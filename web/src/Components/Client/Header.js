/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T15:29:59+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: Header.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T17:24:43+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import React, { Component } from 'react'
import { Menu, Input, Icon, Image } from 'semantic-ui-react'
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
          to="/Home"
          name="Home"
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/About"
          name="AboutUs"
          active={activeItem === 'AboutUs'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/OurTeam"
          name="OurTeam"
          active={activeItem === 'OurTeam'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/Location"
          name="Locations"
          active={activeItem === 'locations'}
          onClick={this.handleItemClick}
        />

        <Menu.Item
          as={Link}
          to="/SetAppointment"
          name="Set an Appointment"
          active={activeItem === 'Set an Appointment'}
          onClick={this.handleItemClick}
        />

        <div class="right menu">
          <Menu.Item
            as={Link}
            to="/Login"
            name="Login"
            visible={() => console.log(this.state.isLoggedIn)}
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            as={Link}
            to="/Logout"
            name="Logout"
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </div>
      </Menu>
    )
  }
}
export default Header
