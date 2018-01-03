import { all, fork } from 'redux-saga/effects'
import loginSaga from './LoginSaga'

export default function* saga() {
  yield all([fork(loginSaga)])
}
