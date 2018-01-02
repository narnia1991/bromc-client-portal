import { delay } from 'redux-saga'
import { call, cancelled, takeLatest, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { stopSubmit } from 'redux-form'

import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  ACCOUNT_SET,
} from '../actions/LoginAction'
import { setAccount, unsetAccount } from '../actions/AccountAction'

import { postData, logout } from '../utils/Api'
import { setCookie } from '../utils/cookieLoader'

function* loginFlow({ url, values, formName }) {
  let access_rights, user

  try {
    const response = yield call(() => postData(url, values))

    user = response.data.data.user_info
    access_rights = response.data.data.user_matrix

    yield put({ type: ACCOUNT_SET, user, access_rights })

    yield delay(1500)

    yield put({ type: USER_LOGIN_SUCCESS })

    localStorage.setItem('access_rights', access_rights) //stringify access rights
    localStorage.setItem(
      'name',
      `${response.data.data.user_info.first_name} ${
        response.data.data.user_info.last_name
      }`
    )
    localStorage.setItem(
      'role',
      `${response.data.data.user_info.user_role_name}`
    )

    setCookie(response.data.data.token)

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
