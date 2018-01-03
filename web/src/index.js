import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Home } from './home'
import { About } from './aboutUs'
import { Location } from './location'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Location" component={Location} />
    </div>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
