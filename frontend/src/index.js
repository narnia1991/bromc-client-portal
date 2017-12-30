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
