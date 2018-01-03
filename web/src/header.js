import React, { Component } from 'react'
import { Menu, Input, Icon, Image } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

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
          name="Set an appointment"
          active={activeItem === 'Set an appointment'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
export default Header
