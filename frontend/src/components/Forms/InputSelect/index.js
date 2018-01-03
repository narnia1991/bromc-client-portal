import React from 'react'
import PropTypes from 'prop-types'
import update from 'react-addons-update'

import { Button, Input, Form, Dropdown } from 'semantic-ui-react'

const propTypes = {
  label: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  error: PropTypes.string,
  touched: PropTypes.bool,
  required: PropTypes.bool,
  width: PropTypes.number,
  disabled: PropTypes.bool,
}

const defaultProps = {
  label: '',
  type: 'text',
  placeholder: '',
  readOnly: false,
}

function InputSelect({
  input,
  label,
  readOnly,
  placeholder,
  autoFocus,
  width,
  required,
  itemValue,
  idValue,
  options,
  disabled,
  meta: { touched, error },
}) {
  let newOption = [
    {
      key: 0,
      text: 'Select None',
      value: '',
    },
  ]

  // let newOption = []

  let updateOption = options.map((item, index) => {
    return {
      key: index + 1,
      text: item[itemValue],
      value: item[idValue],
    }
  })
  newOption = update(newOption, { $push: updateOption })

  return (
    <Form.Field error={touched && error ? true : null} width={width && width} required={required && required}>
      {label && <label htmlFor={input.name}>{label}</label>}

      <Dropdown
        {...input}
        placeholder={placeholder ? placeholder : `Select ${label}`}
        disabled={disabled}
        selection
        value={input.value && input.value}
        onChange={(param, data) => input.onChange(data.value)}
        options={newOption}
      />

      {touched &&
        error && (
          <small>
            <label htmlFor="">{error}</label>
          </small>
        )}
    </Form.Field>
  )
}

InputSelect.propTypes = propTypes
InputSelect.defaultProps = defaultProps

export default InputSelect
