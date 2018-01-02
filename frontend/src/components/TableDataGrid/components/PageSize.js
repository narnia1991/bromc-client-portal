import React, { Component } from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'

export default class PageSize extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e, { value }) {
    let page = 1
    this.props.onChangePage(page, value)
  }

  render() {
    return (
      <Menu compact>
        <Dropdown
          placeholder={String(this.props.currentLimit)}
          fluid
          selection
          options={this.props.limit}
          onChange={this.handleChange}
        />
      </Menu>
    )
  }
}
