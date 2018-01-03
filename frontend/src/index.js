import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import SetAuthorizationToken from './utils/SetAuthorizationToken'

import 'semantic-ui-css/semantic.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import App from './App'

import history from './history'
import reducerS from './reducers'
import saga from './sagas'
import store from './store'

import registerServiceWorker from './registerServiceWorker'

if (localStorage.jwtToken) SetAuthorizationToken(localStorage.jwtToken)
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
