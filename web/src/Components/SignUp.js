/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T15:58:26+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: Login.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T21:01:45+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import React, { Component } from 'react'
import Header from './Header'
import { login } from '../Actions/AuthActions'
import config from '../config'

export default class Login extends Component {
  state = {}
  handleLogin = async e => {
    const data = {
      username: this.state.username,
      password: this.state.password
    }
    console.log('inside Submit')
    const success = await login(data)
    if (success) window.location.href = `${config.web}/client`
  }
  handleInputChange = (name, value) => {
    let newObject = {}
    newObject[name] = value
    console.log(newObject)
    this.setState(newObject)
  }
  render() {
    return [
      <Header />,
      <div className="ui container ">
        <form
          className="ui form "
          onSubmit={e => {
            e.preventDefault()
            this.handleLogin()
          }}
        >
          <h1>Sign Up</h1>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="username"
              placeholder="Email"
              onChange={e => {
                e.preventDefault()
                this.handleInputChange('username', e.target.value)
              }}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={e => {
                e.preventDefault()
                this.handleInputChange('password', e.target.value)
              }}
            />
          </div>
          <button className="ui button" type="submit">
            login
          </button>
        </form>
      </div>
    ]
  }
}
