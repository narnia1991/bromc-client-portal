/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T17:19:14+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: Logout.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T20:51:24+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import React from 'react'
const handleSubmit = () => {}
const Logout = () => {
  return (
    <div className="ui container ">
      <form className="ui form ">
        <h1>Login</h1>
        <div className="field">
          <label>Email</label>
          <input type="text" name="username" placeholder="Email" />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input type="password" name="password" />
        </div>
        <button className="ui button" type="submit">
          login
        </button>
      </form>
    </div>
  )
}

export default Logout
