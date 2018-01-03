import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Grid, Header } from 'semantic-ui-react'
import LoginForm from '../../components/LoginForm'
import { loginAction, loginResetAction } from '../../actions/LoginAction'

export default class Login extends Component {
  componentWillUnmount() {
    this.props.loginResetAction()
  }

  submit = values => {
    const { loginAction } = this.props

    return loginAction('/api/auth', values, 'LoginForm')
  }

  render() {
    return (
      <div className="login-form">
        {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Log-in to your account
            </Header>
            <LoginForm onSubmit={this.submit} />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

Login = connect(
  state => ({
    loginStatus: state.login,
    // pull initial values from account reducer
  }),
  { loginAction, loginResetAction } // bind account loading action creator
)(Login)
