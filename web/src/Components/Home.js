/**
 * @Author: Junar B. Alinsub
 * @Date:   2018-01-03T15:29:59+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: AboutUs.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-03T21:44:43+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import React from 'react'

import Header from './Header'

export const Home = () => [
  <Header />,
  <div className="ui text container">
    <h1 className="ui dividing header">
      Welcome to{' '}
      <img
        width="300"
        height="200"
        src={require('../Images/Logo.png')}
        alt="logo"
      />
    </h1>
    <h3 className="first">About us</h3>
    <p align="auto">
      BROMC Big River Orthopedic Massage Clinic (BROMC) is an Ortho therapeutic
      massage provide services for an accident, work, sports injuries and
      age-ing and disease pain relief. Also, they do maintenance therapeutic
      massage for people in stress-related lifestyle and relaxing massage for
      the general public. The company is fully qualified to do these things and
      are recognized by the medical profession and the medical insurance
      industry. Peter W. Lock 67 years old the owner of BROMC.
      <img
        align="center"
        width="100%"
        height="400"
        src={require('../Images/Home.jpg')}
        alt="home"
      />
    </p>
  </div>,
]

export default Home
