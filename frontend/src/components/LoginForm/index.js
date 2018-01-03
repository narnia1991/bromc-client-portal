import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import InputText from '../Forms/InputText'

let LoginForm = props => {
  const { handleSubmit } = props

  return (
    <Form size="large" onSubmit={handleSubmit}>
      <Segment stacked>
        <Field
          name="userName"
          label="Username"
          component={InputText}
          type="text"
        />
        <Field
          name="password"
          label="Password"
          component={InputText}
          type="password"
        />

        <Button color="teal" fluid size="large">
          Login
        </Button>
      </Segment>
    </Form>
  )
}

LoginForm = reduxForm({
  // a unique name for the form
  form: 'login',
})(LoginForm)

export default LoginForm
