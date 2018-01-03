import { ACCOUNT_SET, ACCOUNT_UNSET } from '../constants'

const initialState = {
  access_rights: [],
  user: {},
  data: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_SET:
      return {
        user: action.user,
        access_rights: action.access_rights,
      }

    case ACCOUNT_UNSET:
      return {
        user: null,
        access_rights: null,
        data: action.payload,
      }

    default:
      return state
  }
}
