import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import LoginReducer from './LoginReducer'
import AccountReducer from './AccountReducer'
import submitFormReducer from './submitFormReducer'
import getData from './getData'

const reducers = combineReducers({
  records: getData,
  submitForm: submitFormReducer,
  logout: AccountReducer,
  login: LoginReducer,
  router: routerReducer,
  form: formReducer,
})

export default reducers
