import {
  REQUEST_API_DATA,
  RECEIVE_API_DATA,
  RECEIVE_API_FAILED,
} from '../constants'

export const requestApiData = url => {
  return {
    type: REQUEST_API_DATA,
    url,
  }
}

export const receiveApiData = data => ({
  type: RECEIVE_API_DATA,
  data,
})

export const receiveApiFailed = error => ({
  type: RECEIVE_API_FAILED,
  error,
})
