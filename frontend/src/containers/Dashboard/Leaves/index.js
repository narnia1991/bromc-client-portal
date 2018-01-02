import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Tabs from '../../../components/Tabs'

import Overview from './Overview'
import Requests from './Requests'

export default class Leaves extends Component {
  static propTypes = {}

  state = { activeItem: 'overview' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Tabs
        show={this.handleItemClick}
        tabs={[{ name: 'overview' }, { name: 'requests' }]}
        activeItem={activeItem}
        tabComponent={activeItem === 'overview' ? Overview : Requests}
      />
    )
  }
}
