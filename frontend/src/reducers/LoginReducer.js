import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_LOGIN_RESET,
} from '../constants'

const initialState = {
  data: {},
  status: null,
  message: '',
}

const LoginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      return {
        status: 'loading',
      }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        status: 'success',
        message: 'success',
      }

    case USER_LOGIN_ERROR:
      return {
        ...state,
        status: 'error',
        data: payload,
      }

    case USER_LOGIN_RESET:
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default LoginReducer
