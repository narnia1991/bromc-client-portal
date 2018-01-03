import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Menu, Input, Icon, Image, Grid } from 'semantic-ui-react'

export const About = () => (
  <div class="ui text container">
    <img class="landing-image" src="./Home.png" />
    <h1 class="ui dividing header">Welcome to BROMC</h1>
    <h3 class="first">About us</h3>
    <p align="center">
      BROMC Big River Orthopedic Massage Clinic (BROMC) is an Ortho therapeutic
      massage provide services for an accident, work, sports injuries and
      age-ing and disease pain relief. Also, they do maintenance therapeutic
      massage for people in stress-related lifestyle and relaxing massage for
      the general public. The company is fully qualified to do these things and
      are recognized by the medical profession and the medical insurance
      industry. Peter W. Lock 67 years old the owner of BROMC..
    </p>
  </div>
)
