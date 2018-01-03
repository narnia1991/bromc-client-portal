import { SUBMIT_FORM, SUBMIT_FORM_RESET } from '../constants'

export function submitFormAction(url, values, formName, method) {
  return {
    type: SUBMIT_FORM,
    url,
    values,
    formName,
    method,
  }
}

export function submitResetAction() {
  return {
    type: SUBMIT_FORM_RESET,
  }
}
