import { compose, createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

import history from '../history'
import saga from '../sagas'
import reducers from '../reducers'

const sagaMiddleware = createSagaMiddleware()

const middleware = routerMiddleware(history)

const composeSetup =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

const enhancers = composeSetup(applyMiddleware(middleware, sagaMiddleware))

const store = createStore(reducers, enhancers)
sagaMiddleware.run(saga)

export default store
