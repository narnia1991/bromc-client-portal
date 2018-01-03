import React, { Component } from 'react'
import { Table, Checkbox, Button, Icon, Grid, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { tableData, deleteItem } from '../../utils/Api'
import FaPlus from 'react-icons/lib/fa/plus'

import PageSize from './components/PageSize'
import Pagination from './components/Pagination'
import SearchBar from './components/SearchBar'
import ErrorModal from './components/ErrorModal'
import DeleteModal from './components/DeleteModal'
import Variable from './../../constants/Variable'

class TableDataGrid extends Component {
  state = {
    column: '',
    dataArray: [],
    direction: '',
    headers: [],
    checkbox: false,
    actions: [],
    pagination: false,
    pageSize: true,
    showModal: false,
    deleteModal: false,
    selectedDelete: null,
    deleteMessage: '',
    errorMsg: '',
    pager: {
      current_page: 1,
      from: '',
      last_page: '',
      next_page_url: '',
      path: '',
      limit: 10,
      prev_page_url: '',
      to: '',
      total: '',
    },
  }

  async componentDidMount() {
    const url = this.props.api.default

    try {
      const data = await tableData(url, {
        page: this.state.pager.current_page,
        page_size: this.state.pager.limit,
      })
      if (data.code !== '200') {
        throw new Error(data.message)
      } else {
        this.setState({
          dataArray: data.data.data,
          pager: {
            current_page: data.data.current_page,
            from: data.data.from,
            last_page: data.data.last_page,
            next_page_url: data.data.next_page_url,
            path: data.data.path,
            limit: data.data.per_page,
            prev_page_url: data.data.prev_page_url,
            to: data.data.to,
            total: data.data.total,
          },
        })
      }
    } catch (e) {
      this.setState({
        showModal: true,
        errorMsg: e.message,
      })
    }

    this.checkboxListener()
    this.checkActionHeader()

    if (this.props.pagination) {
      this.setState({
        pagination: this.props.pagination,
      })
    }
  }

  checkboxListener() {
    if (this.props.checkbox) {
      this.setState({
        checkbox: this.props.checkbox,
        headers: this.props.headers,
      })

      const newArray = this.state.headers.slice()
      newArray.unshift({
        id: 'checkbox',
        name: 'checkbox',
        title: <Checkbox />,
        sortable: false,
      })

      this.setState({ headers: newArray })
    }
  }

  checkActionHeader() {
    if (
      typeof this.props.actions !== 'undefined' &&
      this.props.actions.length > 0
    ) {
      this.setState({
        actions: this.props.actions,
      })

      if (!this.state.checkbox) {
        this.setState({
          headers: this.props.headers,
        })
      }

      if (this.props.actionfirst) {
        const newArray = this.state.headers.slice()
        newArray.unshift({
          id: 'action',
          name: 'action',
          title: 'Action',
        })

        this.setState({ headers: newArray })
      } else {
        const newArray = this.state.headers.slice()

        newArray.push({
          id: 'action',
          name: 'action',
          title: 'Action',
        })

        this.setState({
          headers: newArray,
        })
      }
    } else if (this.props.checkbox) {
      return
    } else {
      this.setState({
        headers: this.props.headers,
      })
    }
  }

  handleSort = (clickedColumn, sortable) => () => {
    const { column, dataArray, direction } = this.state

    if (sortable) {
      if (column !== clickedColumn) {
        this.setState({
          column: clickedColumn,
          dataArray: dataArray.sort(function(a, b) {
            var nameA = a[clickedColumn],
              nameB = b[clickedColumn]
            if (nameA < nameB)
              //sort string ascending
              return -1
            if (nameA > nameB) return 1
            return 0 //default return value (no sorting)
          }),
          direction: 'ascending',
        })

        return
      }

      this.setState({
        dataArray: dataArray.reverse(),
        direction: direction === 'ascending' ? 'descending' : 'ascending',
      })
    }
  }

  async handleSearchClick(value) {
    const url = this.props.api.default

    try {
      const data = await tableData(url, { search: value })
      if (data.code !== '200') {
        throw new Error(data.message)
      } else {
        this.setState({
          dataArray: data.data,
          pagination: true,
          pageSize: false,
          pager: {
            current_page: 1,
            from: 1,
            last_page: 1,
            next_page_url: null,
            path: '',
            limit: '',
            prev_page_url: null,
            to: data.data.length,
            total: data.data.length,
          },
        })
      }
    } catch (e) {
      this.setState({
        showModal: true,
        errorMsg: e.message,
      })
    }
  }

  async onChangePage(page, page_size) {
    const url = this.props.api.default
    let data

    if (page_size === 'All') {
      try {
        data = await tableData(url)

        this.setState({
          dataArray: data.data,
          errorMsg: null,
          pager: {
            current_page: page,
            from: page,
            last_page: page,
            next_page_url: null,
            path: '',
            limit: page_size,
            prev_page_url: null,
            to: data.length,
            total: data.length,
          },
        })
      } catch (e) {
        this.setState({
          showModal: true,
          errorMsg: e.message,
        })
      }
    } else {
      try {
        data = await tableData(url, { page, page_size })

        if (data.code !== '200') {
          throw new Error(data.code)
        } else {
          this.setState({
            dataArray: data.data.data,
            errorMsg: null,
            pager: {
              current_page: data.data.current_page,
              from: data.data.from,
              last_page: data.data.last_page,
              next_page_url: data.data.next_page_url,
              path: data.data.path,
              limit: data.data.per_page,
              prev_page_url: data.data.prev_page_url,
              to: data.data.to,
              total: data.data.total,
            },
          })
        }
      } catch (e) {
        if (e.message === '404') {
          this.setState({
            showModal: false,
            errorMsg: 'Cannot load list. No data available yet.',
          })
        } else {
          this.setState({
            showModal: true,
            errorMsg: e.message,
          })
        }
      }
    }
  }

  render() {
    const { dataArray, errorMsg, headers, pager } = this.state
    const { scrolling, striped } = this.props

    return (
      <div style={scrolling ? scrollStyle : null}>
        <Table sortable celled striped={striped}>
          <Table.Header>
            <Table.Row>
              <Table.Cell
                colSpan={scrolling ? headers.length / 2 + 1 : headers.length}
              >
                {/*Used Grid to align page size and search bar in onle line*/}
                <Grid columns="equal">
                  <Grid.Column>{this.renderPageSize()}</Grid.Column>
                  <Grid.Column>
                    <Grid columns="equal">{this.renderHeaderActions()}</Grid>
                  </Grid.Column>
                </Grid>
              </Table.Cell>
            </Table.Row>
          </Table.Header>

          <Table.Header>
            <Table.Row>{this.renderTableHeaders()}</Table.Row>
          </Table.Header>

          <Table.Body>
            {errorMsg ? (
              <Table.Row>
                <Table.HeaderCell colSpan={headers.length}>
                  <p style={{ textAlign: 'center', padding: 10 }}>
                    Cannot load list. No data available yet.
                  </p>
                </Table.HeaderCell>
              </Table.Row>
            ) : (
              this.renderTableBody()
            )}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell
                colSpan={scrolling ? headers.length / 2 + 2 : headers.length}
              >
                <Grid columns="equal">
                  <Grid.Column verticalAlign="middle">
                    <Header as="h5">
                      Showing {dataArray.length} out of {pager.total}
                    </Header>
                  </Grid.Column>
                  <Grid.Column>{this.renderPagination()}</Grid.Column>
                </Grid>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
          {this.renderModal()}
          {this.renderDeleteModal()}
        </Table>
      </div>
    )
  }

  renderModal() {
    if (this.state.errorMsg !== 'Resource not found.') {
      return (
        <ErrorModal
          showModal={this.state.showModal}
          errorMsg={this.state.errorMsg}
          handleCloseModal={this.handleCloseModal}
        />
      )
    }
    return
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })

    // setTimeout(() => {
    //   this.setState({ showModal: true })
    // }, 7000)
  }

  renderDeleteModal() {
    const { deleteModal, deleteMessage } = this.state
    return (
      <DeleteModal
        deleteModal={deleteModal}
        handleDeleteModal={this.handleDeleteModal}
        handleDeleteItem={this.handleDeleteItem}
        deleteMessage={deleteMessage}
      />
    )
  }

  handleDeleteModal = id => {
    const { selectedDelete } = this.state

    if (selectedDelete) {
      this.setState({
        deleteModal: !this.state.deleteModal,
        selectedDelete: null,
        deleteMessage: '',
      })
    } else {
      this.setState({
        deleteModal: !this.state.deleteModal,
        selectedDelete: id,
        deleteMessage: '',
      })
    }
  }

  handleDeleteItem = () => {
    const { selectedDelete, pager } = this.state

    const { api } = this.props

    let self = this
    let url = `${api.delete}/${selectedDelete}`

    return deleteItem(url)
      .then(response => {
        if (response.status === 200) {
          self.setState({
            deleteMessage: 'Successfully Deleted',
          })
          self.onChangePage(pager.current_page, pager.limit)
        }
      })
      .catch(error => {
        console.log('aaaaaaaFAILED DATA DATA', error)
      })
  }

  renderSearchBar() {
    return (
      <Grid.Column key={1} align="right" verticalAlign="middle">
        <SearchBar onSearchClick={value => this.handleSearchClick(value)} />
      </Grid.Column>
    )
  }

  renderPageSize() {
    if (this.state.pageSize) {
      return (
        <PageSize
          onChangePage={(page, pageSize) => this.onChangePage(page, pageSize)}
          limit={this.props.limit}
          currentLimit={this.state.pager.limit}
        />
      )
    }
    return
  }

  renderHeaderActions() {
    const { headerActions } = this.props

    return headerActions.map(action => {
      switch (action.name) {
        case 'create':
          {
            action.color = Variable.primaryButton
            action.fontColor = Variable.lightColor
            return this.renderHeaderButtons(action)
          }
          break
        case 'download':
          {
            action.color = Variable.downloadButton
            return this.renderHeaderButtons(action)
          }
          break
        case 'search':
          {
            action.color = 'none'
            return this.renderSearchBar(action)
          }
          break
        case 'upload':
          {
            action.color = Variable.uploadButton
            return this.renderHeaderButtons(action)
          }
          break
        default:
          return
      }
    })
  }

  renderHeaderButtons(action) {
    return (
      <Grid.Column key={action.name} align="right" verticalAlign="middle">
        <Button
          as={Link}
          to={action.path}
          icon
          style={{
            color: `${action.fontColor}`,
            backgroundColor: `${action.color}`,
            margin: 0,
          }}
        >
          {action.icon} {action.text}
        </Button>
      </Grid.Column>
    )
  }

  renderPagination() {
    const { pager, dataArray } = this.state

    if (this.state.pagination) {
      return (
        <Pagination
          pager={pager}
          dataArray={dataArray}
          onChangePage={(page, pageSize) => this.onChangePage(page, pageSize)}
          activeColor={Variable.activeColor}
        />
      )
    } else {
      return
    }
  }

  renderTableHeaders() {
    const { column, direction, headers } = this.state
    const { freezePane } = this.props
    let Style

    return headers.map((header, index) => {
      if (freezePane) {
        if (freezePane === header.name) {
          Style = freezePaneStyle
        } else {
          if (index === 1) {
            Style = hasFreezePaneStyle
          } else {
            Style = {}
          }
        }
      }

      return (
        <Table.HeaderCell
          style={this.state.checkbox ? { textAlign: 'center' } : Style}
          key={index}
          sorted={column === header.name ? direction : null}
          onClick={this.handleSort(header.name, header.sortable)}
        >
          {header.title}
        </Table.HeaderCell>
      )
    })
  }

  //renders tablecontents into cells
  renderTableBody() {
    const { dataArray } = this.state
    const { actionfirst } = this.props

    return dataArray.map((data, index) => {
      return (
        <Table.Row key={index}>
          {this.renderCheckbox()}
          {actionfirst
            ? this.renderActionButtons(data[this.props.keyValue])
            : null}
          {this.renderTableCell(data)}
          {!actionfirst
            ? this.renderActionButtons(data[this.props.keyValue])
            : null}
        </Table.Row>
      )
    })
  }

  renderCheckbox() {
    if (this.state.checkbox) {
      return (
        <Table.Cell style={{ padding: 0, textAlign: 'center' }}>
          <Checkbox />
        </Table.Cell>
      )
    }
    return
  }

  renderTableCell(data) {
    const { headers, freezePane } = this.props

    return headers.map((header, index) => {
      if (header.title === 'Status') {
        if (data[header.name] === 1) {
          data[header.name] = 'Active'
        } else if (data[header.name] === 0) {
          data[header.name] = 'Not Active'
        }
      }
      return (
        <Table.Cell
          key={index}
          style={freezePane && index === 0 ? hasFreezePaneStyle : null}
        >
          {data[header.name]}
        </Table.Cell>
      )
    })
  }

  renderActionButtons(keyValue) {
    const { freezePane } = this.props
    if (
      typeof this.state.actions !== 'undefined' &&
      this.state.actions.length > 0
    ) {
      const { actions } = this.state

      return (
        <Table.Cell
          style={
            freezePane === 'action'
              ? freezePaneStyle
              : { padding: 0, textAlign: 'center' }
          }
        >
          <Button.Group>
            {actions.map(action => {
              if (action.path) {
                return (
                  <Button
                    as={Link}
                    key={action.action_name}
                    disabled={!action.access}
                    to={`${action.path}/${keyValue}`}
                  >
                    {action.icon}
                  </Button>
                )
              } else if (action.action_name === 'delete') {
                return (
                  <Button
                    key={action.action_name}
                    disabled={!action.access}
                    onClick={() => this.handleDeleteModal(keyValue)}
                  >
                    {action.icon}
                  </Button>
                )
              } else {
                return (
                  <Button
                    key={action.action_name}
                    icon
                    disabled={!action.access}
                    onClick={() =>
                      action.action ? action.action : console.log('DELETE')
                    }
                  >
                    {action.icon}
                  </Button>
                )
              }
            })}
          </Button.Group>
        </Table.Cell>
      )
    }

    return
  }
}

const scrollStyle = { overflowX: 'scroll', overflowY: 'hidden' }
const freezePaneStyle = {
  position: 'absolute',
  minWidth: '150px',
}
const hasFreezePaneStyle = {
  paddingLeft: '150px',
}

export default TableDataGrid
