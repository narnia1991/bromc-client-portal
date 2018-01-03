import {
  SUBMIT_FORM,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_ERROR,
  SUBMIT_FORM_RESET,
} from '../constants'

const initialState = {
  data: {},
  status: null,
  code: null,
}

const submitFormReducer = (state = initialState, { type, payload }) => {
  // console.log("my reducser",payload);

  switch (type) {
    case SUBMIT_FORM:
      return {
        status: 'loading',
      }

    case SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        status: 'success',
        message: 'success',
        data: payload.data,
        code: null,
      }

    case SUBMIT_FORM_ERROR:
      return {
        ...state,
        status: 'error',
        message: payload,
        code: null,
      }
    case SUBMIT_FORM_RESET:
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default submitFormReducer
