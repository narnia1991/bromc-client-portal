/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T15:58:26+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: Login.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T19:26:46+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import React, { Component } from 'react'
import LoginAction from './Actions/Login'

export default class Login extends Component {
  state = {}
  handleLogin = () => {
    const data = {
      username: this.state.username,
      password: this.state.password
    }
    console.log(data)
  }
  handleInputChange = (name, value) => {
    let newObject = {}
    newObject[name] = value
    this.setState(newObject)
  }
  render() {
    return (
      <div className="ui container ">
        <form className="ui form ">
          <h1>Login</h1>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="username"
              placeholder="Email"
              onChange={() => {
                this.handleInputChange('username', this.value)
              }}
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="password"
              name="password"
              onChange={() => {
                this.handleInputChange('password', this.value)
              }}
            />
          </div>
          <button className="ui button" type="submit">
            login
          </button>
        </form>
      </div>
    )
  }
}
