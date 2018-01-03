import { ACCOUNT_SET, ACCOUNT_UNSET } from '../constants'

export const setAccount = (user, access_rights) => {
  return {
    type: ACCOUNT_SET,
    user,
    access_rights,
  }
}

export const unsetAccount = url => {
  return {
    type: ACCOUNT_UNSET,
    url,
  }
}
