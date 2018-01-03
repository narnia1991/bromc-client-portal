import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tabs from '../../../components/Tabs'

import Volume from './Volume'
// import Feedback from './Feedback'

export default class Reports extends Component {
  static propTypes = {}

  state = { activeItem: 'volume' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Tabs
        show={this.handleItemClick}
        tabs={[
          { name: 'volume' },
          // , { name: 'feedback' }
        ]}
        activeItem={activeItem}
        tabComponent={activeItem === 'volume' ? Volume : null}
      />
    )
  }
}
