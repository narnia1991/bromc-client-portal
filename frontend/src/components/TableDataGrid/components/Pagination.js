import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/lib/fa'

export default class Pagination extends Component {
  constructor(props) {
    super(props)
    this.state = { pager: {} }
  }

  componentWillMount() {
    if (this.props.dataArray && this.props.dataArray.length) {
      this.setState({ pager: this.props.pager })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // reset page if items array has changed
    if (this.props.dataArray !== prevProps.dataArray) {
      this.setState({ pager: this.props.pager })
    }
  }

  handlePageSelect(page, pageSize) {
    pageSize = this.state.pager.limit
    // //next to call changepage
    this.props.onChangePage(page, pageSize)
  }

  getParams(url) {
    url = new URL(url)

    let pageSize = url.searchParams.get('page_size') || this.state.pager.limit

    const page = url.searchParams.get('page')

    //next to call changepage
    this.props.onChangePage(page, pageSize)
  }

  getPagerButtons() {
    let maxButtons = 5
    let activeButton = this.state.pager.current_page || 1
    let lastPage = this.state.pager.last_page

    let pageNumbers = []

    let startButton, endButton
    if (lastPage <= maxButtons) {
      startButton = 1
      endButton = lastPage
    } else if (lastPage > maxButtons) {
      startButton = activeButton - 2
      endButton = activeButton + 2

      if (startButton < 1) {
        startButton = 1
        endButton = maxButtons
      } else if (endButton > lastPage) {
        startButton = lastPage - (maxButtons - 1)
        endButton = lastPage
      }
    } else {
      startButton = 1
      endButton = maxButtons
    }

    for (var i = startButton; i <= endButton; ++i) {
      pageNumbers.push(i)
    }

    return this.renderPageNumberButtons(pageNumbers)
  }

  render() {
    return (
      <Menu floated="right" pagination>
        <Menu.Item as="a" icon onClick={() => this.handlePageSelect(1)} disabled={this.state.pager.current_page === 1}>
          <FaAngleDoubleLeft />
        </Menu.Item>
        <Menu.Item
          as="a"
          icon
          key="prev"
          onClick={() => this.getParams(this.state.pager.prev_page_url)}
          disabled={!this.state.pager.prev_page_url}
        >
          <FaAngleLeft />
        </Menu.Item>

        {this.getPagerButtons()}

        <Menu.Item
          as="a"
          icon
          key="next"
          onClick={() => this.getParams(this.state.pager.next_page_url)}
          disabled={!this.state.pager.next_page_url}
        >
          <FaAngleRight />
        </Menu.Item>
        <Menu.Item
          as="a"
          icon
          onClick={() => this.handlePageSelect(this.state.pager.last_page)}
          disabled={this.state.pager.current_page === this.state.pager.last_page}
        >
          <FaAngleDoubleRight />
        </Menu.Item>
      </Menu>
    )
  }

  renderPageNumberButtons(pageNumbers) {
    let pageButtons = []

    pageButtons.push(
      pageNumbers.map(i => {
        return (
          <Menu.Item
            as="a"
            key={i}
            active={Number(this.state.pager.current_page) === i}
            onClick={() => this.handlePageSelect(i)}
            style={
              Number(this.state.pager.current_page) === i
                ? { backgroundColor: `${this.props.activeColor}` }
                : { backgroundColor: '#fff' }
            }
          >
            {i}
          </Menu.Item>
        )
      })
    )

    return pageButtons
  }
}
