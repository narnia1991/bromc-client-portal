import { delay } from 'redux-saga'
import { call, cancelled, takeLatest, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { stopSubmit } from 'redux-form'

import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  ACCOUNT_SET,
} from '../constants'
import SetAuthorizationToken from '../utils/SetAuthorizationToken'
import { postData } from '../utils/Api'

function* loginFlow({ url, values, formName }) {
  try {
    const response = yield call(() => postData(url, values))

    const token = response.data.token
    localStorage.setItem('jwtToken', token)
    SetAuthorizationToken(token)

    yield put({ type: ACCOUNT_SET })

    yield delay(1500)

    yield put({ type: USER_LOGIN_SUCCESS })

    if (
      response.data.data.first_login === true ||
      response.data.data.first_login === 1
    ) {
      yield put(push('/change-password'))
    } else {
      yield put(push('/dashboard'))
    }
  } catch (error) {
    yield put({ type: USER_LOGIN_ERROR, payload: error.message })

    yield put(stopSubmit(formName, error.message))
  } finally {
    if (yield cancelled()) {
      // yield put(push('/login'))
    }
  }
}

function* loginSaga() {
  yield takeLatest(USER_LOGIN, loginFlow)
}

export default loginSaga
