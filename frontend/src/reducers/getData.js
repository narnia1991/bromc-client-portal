import {
  REQUEST_API_DATA,
  RECEIVE_API_DATA,
  RECEIVE_API_FAILED,
} from '../constants'

const initialState = {
  status: '',
  successful: false,
  messages: [],
  errors: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_API_DATA:
      return {
        ...state,
        status: 'loading',
        successful: false,
        messages: [{ body: 'Fetching data...', time: new Date() }],
        errors: [],
      }

    case RECEIVE_API_DATA:
      return {
        ...state,
        status: 'success',
        successful: true,
        messages: [{ body: 'Receiving data successful', time: new Date() }],
        errors: [],
        data: action.payload,
      }

    case RECEIVE_API_FAILED:
      return {
        ...state,
        errors: state.errors.concat([
          {
            body: action.error.toString(),
            time: new Date(),
          },
        ]),
        messages: [],
        status: 'error',
        successful: false,
      }

    default:
      return state
  }
}
