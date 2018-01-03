import React from 'react'
import PropTypes from 'prop-types'

import { Button, Input, Form, Label } from 'semantic-ui-react'

const propTypes = {
  label: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  error: PropTypes.string,
  touched: PropTypes.bool,
  required: PropTypes.bool,
  width: PropTypes.number,
  options: PropTypes.arrayOf(PropTypes.object),
  disabled: PropTypes.bool,
}

const defaultProps = {
  label: '',
  type: 'text',
  placeholder: '',
  readOnly: false,
}

function InputText({
  input,
  label,
  type,
  readOnly,
  placeholder,
  autoFocus,
  width,
  required,
  disabled,
  meta: { touched, error },
}) {
  return (
    <Form.Field>
      <Input
        autoFocus={autoFocus && autoFocus}
        {...input}
        id={input.name}
        type={type}
        fluid
        readOnly={readOnly ? true : false}
        placeholder={placeholder ? placeholder : `Enter ${label}`}
        error={touched && error ? true : null}
        disabled={disabled}
      />
    </Form.Field>
  )
}

InputText.propTypes = propTypes

export default InputText
