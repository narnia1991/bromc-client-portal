import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Tabs from '../../../components/Tabs'

import Client from './Client'
import Employee from './Employee'

export default class Schedule extends Component {
  static propTypes = {}

  state = { activeItem: 'client' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Tabs
        show={this.handleItemClick}
        tabs={[{ name: 'client' }, { name: 'employee' }]}
        activeItem={activeItem}
        tabComponent={activeItem === 'client' ? Client : Employee}
      />
    )
  }
}
