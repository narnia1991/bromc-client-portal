import { USER_LOGIN, USER_LOGIN_RESET } from '../constants'

export function loginAction(url, values, formName) {
  return {
    type: USER_LOGIN,
    url,
    values,
    formName,
  }
}

export function loginResetAction() {
  return {
    type: USER_LOGIN_RESET,
  }
}
