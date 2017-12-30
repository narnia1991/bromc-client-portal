import moment from 'moment'

export function getDateTime() {
  return moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
}
