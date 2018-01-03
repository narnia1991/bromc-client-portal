/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T18:15:06+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: Body.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T20:38:12+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import React, { Component } from 'react'
import {
  Icon,
  Label,
  Header,
  Dropdown,
  Confirm,
  Breadcrumb,
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Segment
} from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' }
]
const country = [{ key: 'Ph', text: 'Philippines', value: 'Philippines' }]

class Body extends Component {
  state = {}
  state = { open: false }

  handleChange = (e, { value }) => this.setState({ value })
  renderMedical() {
    return 'app'
  }

  render() {
    const { value, app } = this.state
    if (app) {
      // return <Medical />
    }

    return (
      <Form className="registration">
        <Breadcrumb>
          <Breadcrumb.Section link>Home</Breadcrumb.Section>
          <Breadcrumb.Divider icon="right chevron" />
          <Breadcrumb.Section link>Registration</Breadcrumb.Section>
          <Breadcrumb.Divider icon="right arrow" />
          <Breadcrumb.Section active>Personal Information</Breadcrumb.Section>
        </Breadcrumb>
        <Segment inverted>
          <Form.Group unstackable widths={2}>
            <Form.Input label="First name" placeholder="First name" required />
            <Form.Input label="Last name" placeholder="Last name" required />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Select
              label="Gender"
              options={options}
              placeholder="Gender"
              required
            />
            <Form.Input label="Address" placeholder="Address" required />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              label="City"
              placeholder="City"
              required
            />
            <Form.Field
              id="form-input-control-last-name"
              control={Select}
              label="Country"
              options={country}
              placeholder="Country"
              required
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-first-name"
              control={Input}
              label="Email"
              placeholder="Email"
              required
            />
            <Form.Input label="Phone" placeholder="Phone" required />
          </Form.Group>
          <Form.Group widths="equal">
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              showYearDropdown
              dateFormatCalendar="MMMM"
              scrollableYearDropdown
              yearDropdownItemNumber={15}
            />
          </Form.Group>
          <Form.Field
            control={Checkbox}
            label="I agree to the Terms and Conditions"
            required
          />
          <Form.Field
            onClick={() => this.setState({ app: !this.state.app })}
            control={Button}
          >
            Back
          </Form.Field>
        </Segment>
      </Form>
    )
  }
}
export default Body
