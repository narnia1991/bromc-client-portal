import React, { Component } from 'react'
import { Menu, Input, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
export default class MenuExampleHeader extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item header>
          <Icon name="home" size="large" />Big River Orthopedic Massage Clinic
        </Menu.Item>
        <Menu.Item
          name="locations"
          active={activeItem === 'locations'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Set an appointment"
          active={activeItem === 'Set an appointment'}
          onClick={this.handleItemClick}
        />
        <Menu.Item position="right">
          <Input className="icon" icon="search" placeholder="Search..." />
        </Menu.Item>
      </Menu>
    )
  }
}
