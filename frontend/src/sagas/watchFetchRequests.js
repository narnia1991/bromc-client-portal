import { delay } from 'redux-saga'
import { cancel, fork, call, put, take, takeLatest } from 'redux-saga/effects'
import {
  REQUEST_API_DATA,
  RECEIVE_API_DATA,
  RECEIVE_API_FAILED,
} from '../constants'
import { viewData } from './../utils/Api'

function* watchFetchRequests() {
  yield takeLatest('REQUEST_API_DATA', fetchUrl)
}

function* fetchUrl({ url }) {
  try {
    const response = yield call(() => viewData(url))

    if (response) {
      yield delay(1000)
      yield put({
        type: 'RECEIVE_API_DATA',
        payload: response.data,
      })
    }
  } catch (error) {
    yield put({
      type: 'RECEIVE_API_FAILED',
      error,
    })
  }
}

export default watchFetchRequests
