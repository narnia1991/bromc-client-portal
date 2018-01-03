import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Modal, Segment, Form } from 'semantic-ui-react'
import InputDisplay from '../../../components/Forms/InputDisplay'
import { TableDataGrid } from '../../../components/TableDataGrid'
import { requestApiData } from '../../../actions/FetchAction'

class Client extends Component {
  static propTypes = {}

  state = {
    id: '',
    modalOpen: true,
  }

  handleModal = id => {
    this.setState({ id: id, modalOpen: !this.state.modalOpen })

    this.props.requestApiData(`/client-schedule/${id}`)
  }

  renderModal() {
    const { modalOpen, id } = this.state
    const { records } = this.props

    return (
      <Modal open={modalOpen} closeIcon onClose={this.handleModal}>
        <Modal.Header>View Information</Modal.Header>
        <Modal.Content scrolling>
          <Segment style={{ minHeight: '400px' }}>
            {/* {records && ( */}

            <Form>
              <Form.Group widths="equal">
                <InputDisplay
                  label="First Name"
                  // value={records.first_name}
                />
                <InputDisplay
                  label="Middle Name"
                  // value={records.middle_name}
                />
                <InputDisplay
                  label="Last Name"
                  //  value={records.last_name}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <InputDisplay
                  label="Clinic"
                  // value={records.clinic}
                />
                <InputDisplay
                  label="Date Therapy"
                  // value={records.date_therapy}
                />
                <InputDisplay
                  label="From"
                  // value={records.from}
                />
                <InputDisplay
                  label="To"
                  // value={records.to}
                />
              </Form.Group>
              <Form.Group>
                {/* <label>Medical History</label>
                {records.medical_history.map((value, index) => {
                  return (
                    <InputDisplay
                      label={records.medical_history.field_name}
                      value={records.medical_history.field_name}
                    />
                  )
                })} */}
              </Form.Group>
            </Form>
            {/* )} */}
          </Segment>
        </Modal.Content>
      </Modal>
    )
  }

  render() {
    return (
      <div>
        <TableDataGrid
          keyValue="registration_id"
          api={{
            default: '/delivery',
            delete: '/delivery',
            query: '',
          }}
          headerActions={[
            {
              name: 'create',
              icon: '',
              path: 'schedule/create',
              text: 'Create User',
              color: '',
            },
          ]}
          actions={[
            {
              access: true,
              action_name: 'view',
              icon: 'view',
              action: id => {
                this.handleModalMe
              },
            },
          ]}
          limit={[
            { key: 1, text: '10', value: 10 },
            { key: 2, text: '20', value: 20 },
            { key: 3, text: '50', value: 50 },
          ]}
          headers={[
            {
              name: 'first_name',
              title: 'First Name',
              sortable: true,
            },
            {
              name: 'middle_name',
              title: 'Middle Name',
              sortable: true,
            },
            {
              id: 3,
              name: 'last_name',
              title: 'Last Name',
              sortable: true,
            },
            {
              id: 4,
              name: 'date',
              title: 'Date',
              sortable: true,
            },
            {
              id: 5,
              name: 'depot_id',
              title: 'Ship to Name',
              sortable: true,
            },
          ]}
        />

        {this.renderModal()}
      </div>
    )
  }
}

Client = connect(
  state => ({
    records: state.viewRecords,
    // pull initial values from account reducer
  }),
  { requestApiData } // bind account loading action creator
)(Client)

export default Client
