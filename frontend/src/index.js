<<<<<<< HEAD
// import React from 'react'
// import { render } from 'react-dom'
// import { connect, Provider } from 'react-redux'
// import {
//   ConnectedRouter,
//   routerReducer,
//   routerMiddleware,
// } from 'react-router-redux'

// import { createStore, applyMiddleware } from 'redux'
// import createHistory from 'history/createBrowserHistory'

// import { Link } from 'react-router-dom'
// import { Route, Switch } from 'react-router'

// const history = createHistory()

// const store = createStore(
//   routerReducer,
//   applyMiddleware(routerMiddleware(history))
// )

// const ConnectedSwitch = connect(state => ({
//   location: state.location,
// }))(Switch)

// const AppContainer = () => (
//   <ConnectedSwitch>
//     <Route
//       exact
//       path="/"
//       component={() => (
//         <h1>
//           Home <Link to="/about">About</Link>
//         </h1>
//       )}
//     />
//     <Route
//       path="/about"
//       component={() => (
//         <h1>
//           About <Link to="/">Home</Link>
//         </h1>
//       )}
//     />
//   </ConnectedSwitch>
// )

// const App = connect(state => ({
//   location: state.location,
// }))(AppContainer)

// render(
//   <Provider store={store}>
//     <ConnectedRouter history={history}>
//       <App />
//     </ConnectedRouter>
//   </Provider>,
//   document.getElementById('root')
// )

import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'

import 'semantic-ui-css/semantic.min.css'
import App from './App'

import history from './history'
import reducerS from './reducers'
import saga from './sagas'
import store from './store'

import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

// ReactDOM.render(
//   <ConnectedRouter history={history}>
//     <App />
//   </ConnectedRouter>,
//   document.getElementById('root')
// )
// registerServiceWorker()
=======
/**
 * @Author: Junar B. Alinsub
 * @Date:   2017-12-24T02:31:31+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: index.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2017-12-30T05:29:58+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'semantic-ui-css/semantic.min.css'
import SetAuthorizationToken from './utils/SetAuthorizationToken'

if (localStorage.jwtToken) SetAuthorizationToken(localStorage.jwtToken)
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
>>>>>>> 762f9a40bf1e663e9aeb3b8ac17a427ee3df5429
