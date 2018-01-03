import React, { Component } from 'react'
import { Form, Input, Icon } from 'semantic-ui-react'
import FaSearch from 'react-icons/lib/fa/search'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }
  }

  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ value: '' })

  handleSearchChange = e => {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <Form onSubmit={() => this.props.onSearchClick(this.state.value)}>
        <Input
          onChange={e => this.handleSearchChange(e)}
          icon={
            <Icon name="search" inverted circular link onClick={() => this.props.onSearchClick(this.state.value)} />
          }
          placeholder="Search..."
        />
      </Form>
    )
  }
}

export default SearchBar
