import { delay } from 'redux-saga'
import {
  call,
  takeLatest,
  takeEvery,
  put,
  take,
  fork,
  cancelled,
} from 'redux-saga/effects'
import { SubmissionError, stopSubmit } from 'redux-form'

import {
  SUBMIT_FORM,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_ERROR,
} from '../constants'

import { postData, putData } from '../utils/Api'

function* logout() {}

function* submitForm({ url, values, formName, method }) {
  // alert('HELLO!!')
  try {
    let response = null
    if (method === 'put') {
      // alert("PUT")
      response = yield call(() => putData(url, values))
    } else {
      // alert("POST")
      response = yield call(() => postData(url, values))
    }

    yield delay(500)
    yield put({ type: SUBMIT_FORM_SUCCESS, payload: response.data })
  } catch (error) {
    if (error.response && error.response.data && error.response.data.data) {
      yield put({ type: SUBMIT_FORM_ERROR, payload: error.response.data })
    } else {
      let errorMessage = ''
      if (error.response && error.response.data) {
        errorMessage = error.response.data.message
      } else {
        errorMessage = error.message
      }

      yield put({ type: SUBMIT_FORM_ERROR, payload: errorMessage })
    }
  } finally {
    if (yield cancelled()) {
      // yield put(push('/login'))
    }
  }
}

function* submitFormSaga() {
  yield takeLatest(SUBMIT_FORM, submitForm)
}

export default submitFormSaga
