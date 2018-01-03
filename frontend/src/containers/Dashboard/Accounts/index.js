import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Tabs from '../../../components/Tabs'

import Therapists from './Therapists'
import Staff from './Staff'

export default class Accounts extends Component {
  static propTypes = {}

  state = { activeItem: 'therapists' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Tabs
        show={this.handleItemClick}
        tabs={[{ name: 'therapists' }, { name: 'staff' }]}
        activeItem={activeItem}
        tabComponent={activeItem === 'therapists' ? Therapists : Staff}
      />
    )
  }
}
