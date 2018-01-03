/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T15:58:26+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: Login.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-04T02:01:24+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */
import React, { Component } from 'react'
import Header from './Header'
import config from '../../config'
import AccessCheck from '../../utils/AccessCheck'
import {
  BillingCheckAction,
  BillingSubmitAction
} from '../../Actions/BillingActions'

export default class Billign extends Component {
  constructor() {
    super()
    this.state = { billing: {} }
  }
  handleInputChange = (name, value) => {
    let newObject = {}
    newObject[name] = value
    console.log(newObject)
    this.setState(newObject)
  }

  handleSubmit = async () => {
    const bill = {
      card_no: this.state.card_no,
      validity: this.state.validity,
      cvv: this.state.cvv,
      name: this.state.name,
      address: this.state.address
    }
    const submit = await BillingSubmitAction(bill)
    if (submit) {
      alert('Billing Account Creation Successful')
    }
  }

  async componentWillMount() {
    AccessCheck()

    const billing = await BillingCheckAction()
    if (!billing) {
      alert('Please setup your Billing Account')
      this.setState({ billing: 'new' })
      this.setState({ isEditable: false })
    } else this.setState({ billing })
  }

  handleBilling() {
    if (this.state.billing === 'new' || this.state.isEditable == true) {
      return (
        <div className="ui container ">
          <form
            className="ui form "
            onSubmit={e => {
              e.preventDefault()
              this.handleSubmit()
            }}
          >
            <h1>Billing</h1>
            <button
              onClick={e => {
                e.preventDefault()
                this.setState({ isEditable: !this.state.isEditable })
              }}
              hidden={this.state.isEditable}
            >
              X
            </button>
            <div className="field">
              <label>Card Number</label>
              <input
                type="text"
                name="card_no"
                placeholder="Card No."
                onChange={e => {
                  e.preventDefault()
                  this.handleInputChange('card_no', e.target.value)
                }}
              />
            </div>
            <div className="field">
              <label>Validity</label>
              <input
                type="text"
                name="validity"
                onChange={e => {
                  e.preventDefault()
                  this.handleInputChange('validity', e.target.value)
                }}
              />
            </div>
            <div className="field">
              <label>CVV</label>
              <input
                type="text"
                name="cvv"
                onChange={e => {
                  e.preventDefault()
                  this.handleInputChange('cvv', e.target.value)
                }}
              />
            </div>
            <div className="field">
              <label>Name on Card</label>
              <input
                type="text"
                name="name"
                onChange={e => {
                  e.preventDefault()
                  this.handleInputChange('name', e.target.value)
                }}
              />
            </div>
            <div className="field">
              <label>Address</label>
              <input
                type="text"
                name="address"
                onChange={e => {
                  e.preventDefault()
                  this.handleInputChange('address', e.target.value)
                }}
              />
            </div>
            <button className="ui button" type="submit">
              login
            </button>
          </form>
        </div>
      )
    } else {
      return (
        <div className="ui container ">
          <form
            className="ui form "
            onSubmit={e => {
              e.preventDefault()
              this.handleSubmit()
            }}
          >
            <h1>Billing</h1>
            <button
              onClick={e => {
                e.preventDefault()
                this.setState({ isEditable: !this.state.isEditable })
              }}
              hidden={this.state.isEditable}
            >
              O
            </button>
            <div className="field">
              <label>Card Number</label>
              <h3>{this.state.billing.card_no}</h3>
              />
            </div>
            <div className="field">
              <label>Validity</label>
              <h3>{this.state.billing.validity}</h3>
            </div>
            <div className="field">
              <label>CVV</label>
              <h3>{this.state.billing.cvv}</h3>
            </div>
            <div className="field">
              <label>Name on Card</label>
              <h3>{this.state.billing.name}</h3>
            </div>
            <div className="field">
              <label>Address</label>
              <h3>{this.state.billing.address}</h3>
            </div>
            <button
              className="ui button"
              type="submit"
              hidden={this.state.isEditable}
            >
              login
            </button>
          </form>
        </div>
      )
    }
  }
  render() {
    return [<Header />, this.handleBilling()]
  }
}
