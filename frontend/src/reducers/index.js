import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import LoginReducer from './LoginReducer'

const reducers = combineReducers({
  login: LoginReducer,
  router: routerReducer,
  form: formReducer,
})

export default reducers
