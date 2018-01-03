import React from 'react'
import { Button, Form, Segment, Grid } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import InputText from '../../../components/Forms/InputText'
import InputDatePicker from '../../../components/Forms/InputDatePicker'
import InputSelect from '../../../components/Forms/InputSelect'

import { timeOptions } from '../../../utils/timeOptions'
import { submitResetAction } from '../../../actions/SubmitAction'

let ScheduleForm = props => {
  const { onSubmit, handleSubmit, pristine, submitting } = props

  return (
    <Form size="large" onSubmit={handleSubmit(onSubmit)}>
      <Segment style={{ minHeight: '400px' }}>
        <Form.Group widths="equal">
          <Field
            required
            name="date"
            label="Date"
            mask="99/99/9999"
            component={InputDatePicker}
          />
          <Field
            required
            name="from"
            label="From"
            itemValue="name"
            idValue="value"
            options={timeOptions()}
            component={InputSelect}
          />
          <Field
            required
            name="to"
            label="To"
            itemValue="name"
            idValue="value"
            options={timeOptions()}
            component={InputSelect}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Field
            required
            name="first_name"
            label="First Name"
            component={InputText}
          />
          <Field
            required
            name="middle_name"
            label="Middle Name"
            component={InputText}
          />
          <Field
            required
            name="last_name"
            label="Last Name"
            component={InputText}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Field
            required
            name="address_1"
            label="Address 1"
            component={InputText}
          />
          <Field
            required
            name="address_2"
            label="Address 2"
            component={InputText}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Field required name="city" label="City" component={InputText} />
          <Field
            required
            name="country"
            label="Country"
            component={InputText}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Field
            required
            name="phone_number"
            label="Phone Number"
            component={InputText}
          />
          <Field
            required
            name="cell_number"
            label="Cell Number"
            component={InputText}
          />
          <Field
            required
            name="e_mail"
            label="Email"
            type="email"
            component={InputText}
          />
        </Form.Group>

        <Button color="teal" size="large" disabled={pristine || submitting}>
          Submit
        </Button>
      </Segment>
    </Form>
  )
}

ScheduleForm = reduxForm({
  // a unique name for the form
  form: 'ScheduleForm',
})(ScheduleForm)

export default ScheduleForm
