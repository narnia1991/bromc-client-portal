import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import InputMask from 'react-input-mask'
import { Input, Form } from 'semantic-ui-react'

import PropTypes from 'prop-types'
import FaCalendar from 'react-icons/lib/fa/calendar'
import styled from 'styled-components'

const IconInput = styled.label`
  position: absolute;
  right: 0;
  z-index: 1;
  top: 50%;
  margin-top: -10px;
  margin-right: 10px;

  svg {
    .field.error & {
      fill: #e0b4b4;
    }
    fill: #9e9e9e;
    height: 1.25em;
    width: 1.25em;
  }
`

const propTypes = {
  label: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
  }),
  value: PropTypes.object,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
}

const defaultProps = {
  label: '',
  type: 'text',
  placeholder: '',
  disabled: false,
  readOnly: false,
}

function InputDatePicker(props) {
  const {
    width,
    required,
    input,
    label,
    maxDate,
    minDate,
    disabled,
    readOnly,
    placeholder,
    isClearable,
    mask,
    inputProps,
    meta: { touched, error },
  } = props

  if (input.value) {
    // console.log(moment(input.value).format("MM/DD/YYYY"), "IIIFFFF");
    input.value = moment(input.value).format('MM/DD/YYYY')
  } else {
    input.value = null
  }
  console.log(input, 'ELLSE!!')
  return (
    <Form.Field
      error={touched && error ? true : null}
      width={width && width}
      required={required && required}
    >
      {label && <label htmlFor={input.name}>{label}</label>}
      <div style={{ position: 'relative' }}>
        <IconInput htmlFor={input.name}>
          <FaCalendar />
        </IconInput>
        <DatePicker
          {...input}
          id={input.name}
          fixedHeight
          customInput={<InputMask mask={mask} maskChar={null} />}
          readOnly={readOnly ? true : false}
          disabled={disabled ? true : false}
          className="form-control"
          dateFormat="MM/DD/YYYY"
          selected={input.value ? moment(input.value, 'MM/DD/YYYY') : null}
          showMonthDropdown
          showYearDropdown
          dateFormatCalendar="MMMM"
          placeholderText={placeholder ? placeholder : 'MM/DD/YYYY'}
          isClearable={isClearable}
        />
      </div>
      {touched &&
        error && (
          <small>
            <label htmlFor="">{error}</label>
          </small>
        )}
    </Form.Field>
  )
}

export default InputDatePicker
