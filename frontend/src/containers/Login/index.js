import React, { Component } from 'react'
import { Grid, Header } from 'semantic-ui-react'
import LoginForm from '../../components/LoginForm'

export default class Login extends Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
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
