import React, { Component } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
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
  Segment,
} from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import Personal from './App.js'
import 'react-datepicker/dist/react-datepicker.css'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]
const country = [{ key: 'Ph', text: 'Philippines', value: 'Philippines' }]
const ortho = [
  { key: 'None', text: 'None', value: 'None' },
  { key: 'Scoliosis', text: 'Scoliosis', value: 'Scoliosis' },
  { key: 'Disk problems', text: 'Disk problems', value: 'Disk problems' },
  {
    key: 'ScoliSpasms, crampsosis',
    text: 'Spasms, cramps',
    value: 'Spasms, cramps',
  },
  { key: 'Sprains/Strains', text: 'Sprains/Strains', value: 'Sprains/Strains' },
  {
    key: 'Tendinitis/Bursitis ',
    text: 'Tendinitis/Bursitis ',
    value: 'Tendinitis/Bursitis ',
  },
  { key: 'Spinal injury', text: 'Spinal injury', value: 'Spinal injury' },
  { key: 'Neck pain', text: 'Neck pain', value: 'Neck pain' },
  { key: 'Recent sprain', text: 'Recent sprain', value: 'Recent sprain' },
  { key: 'Low back Pain', text: 'Low back Pain', value: 'Low back Pain' },
  { key: 'Hip pain', text: 'Hip pain', value: 'Hip pain' },
  { key: 'Neck', text: 'Neck', value: 'Neck' },
  {
    key: 'Shoulder & arm Pain',
    text: 'Shoulder & arm Pain',
    value: 'Shoulder & arm Pain',
  },
  {
    key: 'Weak or sore muscles',
    text: 'Weak or sore muscles',
    value: 'Weak or sore muscles',
  },
  {
    key: 'Sciatica, shooting pain',
    text: 'Sciatica, shooting pain',
    value: 'Sciatica, shooting pain',
  },
]
const neurology = [
  { key: 'None', text: 'None', value: 'None' },
  { key: 'Stroke', text: 'Stroke', value: 'Stroke' },
  { key: 'Concussions', text: 'Concussions', value: 'Concussions' },
  { key: 'Epilepsy', text: 'Epilepsy', value: 'Epilepsy' },
  { key: 'Numbness', text: 'Numbness', value: 'Numbness' },
  { key: 'Tingling', text: 'Tingling', value: 'Tingling' },
  { key: 'Headache', text: 'Headache', value: 'Headache' },
]
const psychiatry = [
  { key: 'None', text: 'None', value: 'None' },
  { key: 'Stroke', text: 'Stroke', value: 'Stroke' },
  { key: 'Concussions', text: 'Concussions', value: 'Concussions' },
  { key: 'Epilepsy', text: 'Epilepsy', value: 'Epilepsy' },
  { key: 'Numbness', text: 'Numbness', value: 'Numbness' },
  { key: 'Tingling', text: 'Tingling', value: 'Tingling' },
  { key: 'Headache', text: 'Headache', value: 'Headache' },
]
const gastrointestinal = [
  { key: 'None', text: 'None', value: 'None' },
  { key: 'Stroke', text: 'Stroke', value: 'Stroke' },
  { key: 'Concussions', text: 'Concussions', value: 'Concussions' },
  { key: 'Epilepsy', text: 'Epilepsy', value: 'Epilepsy' },
  { key: 'Numbness', text: 'Numbness', value: 'Numbness' },
  { key: 'Tingling', text: 'Tingling', value: 'Tingling' },
  { key: 'Headache', text: 'Headache', value: 'Headache' },
]
const pulmonaryMedicine = [
  { key: 'None', text: 'None', value: 'None' },
  { key: 'Stroke', text: 'Stroke', value: 'Stroke' },
  { key: 'Concussions', text: 'Concussions', value: 'Concussions' },
  { key: 'Epilepsy', text: 'Epilepsy', value: 'Epilepsy' },
  { key: 'Numbness', text: 'Numbness', value: 'Numbness' },
  { key: 'Tingling', text: 'Tingling', value: 'Tingling' },
  { key: 'Headache', text: 'Headache', value: 'Headache' },
]
const cardiology = [
  { key: 'None', text: 'None', value: 'None' },
  { key: 'Stroke', text: 'Stroke', value: 'Stroke' },
  { key: 'Concussions', text: 'Concussions', value: 'Concussions' },
  { key: 'Epilepsy', text: 'Epilepsy', value: 'Epilepsy' },
  { key: 'Numbness', text: 'Numbness', value: 'Numbness' },
  { key: 'Tingling', text: 'Tingling', value: 'Tingling' },
  { key: 'Headache', text: 'Headache', value: 'Headache' },
]
const infectiousDiseases = [
  { key: 'None', text: 'None', value: 'None' },
  { key: 'Stroke', text: 'Stroke', value: 'Stroke' },
  { key: 'Concussions', text: 'Concussions', value: 'Concussions' },
  { key: 'Epilepsy', text: 'Epilepsy', value: 'Epilepsy' },
  { key: 'Numbness', text: 'Numbness', value: 'Numbness' },
  { key: 'Tingling', text: 'Tingling', value: 'Tingling' },
  { key: 'Headache', text: 'Headache', value: 'Headache' },
]
const endocrinology = [
  { key: 'None', text: 'None', value: 'None' },
  { key: 'Stroke', text: 'Stroke', value: 'Stroke' },
  { key: 'Concussions', text: 'Concussions', value: 'Concussions' },
  { key: 'Epilepsy', text: 'Epilepsy', value: 'Epilepsy' },
  { key: 'Numbness', text: 'Numbness', value: 'Numbness' },
  { key: 'Tingling', text: 'Tingling', value: 'Tingling' },
  { key: 'Headache', text: 'Headache', value: 'Headache' },
]
const rheumatology = [
  { key: 'None', text: 'None', value: 'None' },
  { key: 'Stroke', text: 'Stroke', value: 'Stroke' },
  { key: 'Concussions', text: 'Concussions', value: 'Concussions' },
  { key: 'Epilepsy', text: 'Epilepsy', value: 'Epilepsy' },
  { key: 'Numbness', text: 'Numbness', value: 'Numbness' },
  { key: 'Tingling', text: 'Tingling', value: 'Tingling' },
  { key: 'Headache', text: 'Headache', value: 'Headache' },
]
const obGyne = [
  { key: 'None', text: 'None', value: 'None' },
  { key: 'Stroke', text: 'Stroke', value: 'Stroke' },
  { key: 'Concussions', text: 'Concussions', value: 'Concussions' },
  { key: 'Epilepsy', text: 'Epilepsy', value: 'Epilepsy' },
  { key: 'Numbness', text: 'Numbness', value: 'Numbness' },
  { key: 'Tingling', text: 'Tingling', value: 'Tingling' },
  { key: 'Headache', text: 'Headache', value: 'Headache' },
]
const nephrology = [
  { key: 'None', text: 'None', value: 'None' },
  { key: 'Stroke', text: 'Stroke', value: 'Stroke' },
  { key: 'Concussions', text: 'Concussions', value: 'Concussions' },
  { key: 'Epilepsy', text: 'Epilepsy', value: 'Epilepsy' },
  { key: 'Numbness', text: 'Numbness', value: 'Numbness' },
  { key: 'Tingling', text: 'Tingling', value: 'Tingling' },
  { key: 'Headache', text: 'Headache', value: 'Headache' },
]
const oncology = [
  { key: 'None', text: 'None', value: 'None' },
  { key: 'Stroke', text: 'Stroke', value: 'Stroke' },
  { key: 'Concussions', text: 'Concussions', value: 'Concussions' },
  { key: 'Epilepsy', text: 'Epilepsy', value: 'Epilepsy' },
  { key: 'Numbness', text: 'Numbness', value: 'Numbness' },
  { key: 'Tingling', text: 'Tingling', value: 'Tingling' },
  { key: 'Headache', text: 'Headache', value: 'Headache' },
]
const pastMedical = [
  { key: 'None', text: 'None', value: 'None' },
  { key: 'Stroke', text: 'Stroke', value: 'Stroke' },
  { key: 'Concussions', text: 'Concussions', value: 'Concussions' },
  { key: 'Epilepsy', text: 'Epilepsy', value: 'Epilepsy' },
  { key: 'Numbness', text: 'Numbness', value: 'Numbness' },
  { key: 'Tingling', text: 'Tingling', value: 'Tingling' },
  { key: 'Headache', text: 'Headache', value: 'Headache' },
]
const vascularMedicine = [
  { key: 'None', text: 'None', value: 'None' },
  { key: 'Stroke', text: 'Stroke', value: 'Stroke' },
  { key: 'Concussions', text: 'Concussions', value: 'Concussions' },
  { key: 'Epilepsy', text: 'Epilepsy', value: 'Epilepsy' },
  { key: 'Numbness', text: 'Numbness', value: 'Numbness' },
  { key: 'Tingling', text: 'Tingling', value: 'Tingling' },
  { key: 'Headache', text: 'Headache', value: 'Headache' },
]
const duringMassage = [
  { key: 'None', text: 'None', value: 'None' },
  { key: 'Stroke', text: 'Stroke', value: 'Stroke' },
  { key: 'Concussions', text: 'Concussions', value: 'Concussions' },
  { key: 'Epilepsy', text: 'Epilepsy', value: 'Epilepsy' },
  { key: 'Numbness', text: 'Numbness', value: 'Numbness' },
  { key: 'Tingling', text: 'Tingling', value: 'Tingling' },
  { key: 'Headache', text: 'Headache', value: 'Headache' },
]
const painENT = [
  { key: 'None', text: 'None', value: 'None' },
  { key: 'Stroke', text: 'Stroke', value: 'Stroke' },
  { key: 'Concussions', text: 'Concussions', value: 'Concussions' },
  { key: 'Epilepsy', text: 'Epilepsy', value: 'Epilepsy' },
  { key: 'Numbness', text: 'Numbness', value: 'Numbness' },
  { key: 'Tingling', text: 'Tingling', value: 'Tingling' },
  { key: 'Headache', text: 'Headache', value: 'Headache' },
]
const derma = [
  { key: 'None', text: 'None', value: 'None' },
  { key: 'Stroke', text: 'Stroke', value: 'Stroke' },
  { key: 'Concussions', text: 'Concussions', value: 'Concussions' },
  { key: 'Epilepsy', text: 'Epilepsy', value: 'Epilepsy' },
  { key: 'Numbness', text: 'Numbness', value: 'Numbness' },
  { key: 'Tingling', text: 'Tingling', value: 'Tingling' },
  { key: 'Headache', text: 'Headache', value: 'Headache' },
]
const breast = [
  { key: 'None', text: 'None', value: 'None' },
  { key: 'Stroke', text: 'Stroke', value: 'Stroke' },
  { key: 'Concussions', text: 'Concussions', value: 'Concussions' },
  { key: 'Epilepsy', text: 'Epilepsy', value: 'Epilepsy' },
  { key: 'Numbness', text: 'Numbness', value: 'Numbness' },
  { key: 'Tingling', text: 'Tingling', value: 'Tingling' },
  { key: 'Headache', text: 'Headache', value: 'Headache' },
]
class Medical extends Component {
  state = {}
  state = { open: false }

  handleChange = (e, { value }) => this.setState({ value })
  renderMedical() {
    return 'app'
  }

  render() {
    const { value, app } = this.state
    if (app) {
      return <Medical />
    }

    return (
      <Form className="registration">
        <Breadcrumb>
          <Breadcrumb.Section link>Home</Breadcrumb.Section>
          <Breadcrumb.Divider icon="right chevron" />
          <Breadcrumb.Section link>Registration</Breadcrumb.Section>
          <Breadcrumb.Divider icon="right arrow" />
          <Breadcrumb.Section active>Medical Information</Breadcrumb.Section>
        </Breadcrumb>
        <Segment inverted>
          <Form.Group size="huge" unstackable widths="equal">
            <Form.Field size="huge" label="Medical Information" />
          </Form.Group>
          <Form.Group unstackable widths="equal">
            <Form.Field
              control={Select}
              label="Ortho or Rehab Med"
              options={ortho}
              placeholder="Fill the fields"
            />
            <Form.Field
              control={Select}
              label="Neurology"
              options={neurology}
              placeholder="Fill the fields"
            />
          </Form.Group>
          <Form.Group unstackable widths="equal">
            <Form.Field
              control={Select}
              label="Psychiatry"
              options={psychiatry}
              placeholder="Fill the fields"
            />
            <Form.Field
              control={Select}
              label="Gastrointestinal"
              options={gastrointestinal}
              placeholder="Fill the fields"
            />
          </Form.Group>
          <Form.Group unstackable widths="equal">
            <Form.Field
              control={Select}
              label="Pulmonary Medicine"
              options={pulmonaryMedicine}
              placeholder="Fill the fields"
            />
            <Form.Field
              control={Select}
              label="Cardiology"
              options={cardiology}
              placeholder="Fill the fields"
            />
          </Form.Group>
          <Form.Group unstackable widths="equal">
            <Form.Field
              control={Select}
              label="Infectious Diseases"
              options={infectiousDiseases}
              placeholder="Fill the fields"
            />
            <Form.Field
              control={Select}
              label="Endocrinology"
              options={endocrinology}
              placeholder="Fill the fields"
            />
          </Form.Group>
          <Form.Group unstackable widths="equal">
            <Form.Field
              control={Select}
              label="Rheumatology"
              options={rheumatology}
              placeholder="Fill the fields"
            />
            <Form.Field
              control={Select}
              label="Ob and Gyne"
              options={obGyne}
              placeholder="Fill the fields"
            />
          </Form.Group>
          <Form.Group unstackable widths="equal">
            <Form.Field
              control={Select}
              label="Painful Emotional Menses (ENT)"
              options={painENT}
              placeholder="Fill the fields"
            />
            <Form.Field
              control={Select}
              label="Nephrology"
              options={nephrology}
              placeholder="Fill the fields"
            />
          </Form.Group>
          <Form.Group unstackable widths="equal">
            <Form.Field
              control={Select}
              label="Oncology"
              options={oncology}
              placeholder="Fill the fields"
            />
            <Form.Field
              control={Select}
              label="Dermatology"
              options={derma}
              placeholder="Fill the fields"
            />
          </Form.Group>
          <Form.Group unstackable widths="equal">
            <Form.Field
              control={Select}
              label="Breast"
              options={breast}
              placeholder="Fill the fields"
            />
            <Form.Field
              control={Select}
              label="Past Medical History"
              options={pastMedical}
              placeholder="Fill the fields"
            />
          </Form.Group>
          <Form.Group unstackable widths="equal">
            <Form.Field
              control={Select}
              label="During Full Body Massage you like the ff areas be massage?"
              options={duringMassage}
              placeholder="Fill the fields"
            />
            <Form.Field
              control={Select}
              label="Vascular Medicine"
              options={vascularMedicine}
              placeholder="Fill the fields"
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
export default Medical
