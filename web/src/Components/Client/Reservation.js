/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T15:58:26+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: Login.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T21:58:00+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import React, { Component } from 'react'
import Header from './Header'
import AccessCheck from '../../utils/AccessCheck'
import config from '../../config'

export default class Reservation extends Component {
  state = {}
  handleInputChange = (name, value) => {
    let newObject = {}
    newObject[name] = value
    console.log(newObject)
    this.setState(newObject)
  }
  componentWillMount() {
    AccessCheck()
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
          <h1>Reservation</h1>
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
          <p>
            <a href={`${config.web}/ForgotPassword`}>Forgot Password</a>
          </p>
          <button className="ui button" type="submit">
            login
          </button>
        </form>
      </div>
    ]
  }
}
