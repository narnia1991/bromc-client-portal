import { all, fork } from 'redux-saga/effects'
import loginSaga from './LoginSaga'
import logoutSaga from './LogoutSaga'

export default function* saga() {
  yield all([fork(loginSaga), fork(logoutSaga)])
}
