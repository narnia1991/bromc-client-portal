import { delay } from 'redux-saga'
import { call, cancelled, takeLatest, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import { ACCOUNT_SET, ACCOUNT_UNSET } from '../constants'

import { postData } from '../utils/Api'

function* logoutWatcher({ url }) {
  try {
    const response = yield call(() => postData(url, null))

    localStorage.setItem('jwtToken', '')

    yield call(push('/login'))

    yield delay(500)

    yield put({ type: ACCOUNT_UNSET, payload: response })
  } catch (e) {
    console.log(e)
  }
}

function* logoutSaga() {
  yield takeLatest(ACCOUNT_UNSET, logoutWatcher)
}

export default logoutSaga
