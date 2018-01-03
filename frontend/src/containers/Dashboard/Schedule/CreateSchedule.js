import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, Header } from 'semantic-ui-react'

import {
  submitFormAction,
  submitResetAction,
} from '../../../actions/SubmitAction'
import ScheduleForm from './ScheduleForm'

class CreateSchedule extends Component {
  static propTypes = {}

  state = { activeItem: 'client' }

  componentWillUnmount() {
    this.props.submitResetAction()
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  submit = values => {
    const { submitFormAction } = this.props
    console.log(values)

    // return submitFormAction('schedule', values, 'ScheduleForm')
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Header as="h2" color="teal" textAlign="center">
          Create Schedule
        </Header>
        <ScheduleForm onSubmit={this.submit} />
      </div>
    )
  }
}

CreateSchedule = connect(
  state => ({
    submitResult: state.submitForm,
    // pull initial values from account reducer
  }),
  { submitFormAction, submitResetAction } // bind account loading action creator
)(CreateSchedule)

export default CreateSchedule
