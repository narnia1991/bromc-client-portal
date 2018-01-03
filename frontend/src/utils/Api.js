import axios from 'axios'
import { getCookie } from './cookieLoader'

axios.defaults.baseURL = 'http://172.104.30.86:8008/api'

export async function tableData(url, params) {
  const res = await axios.get(url, {
    params,
  })

  const data = res.data

  return data
}

export async function viewData(url) {
  const res = await axios.get(url)

  const data = res.data

  return data
}

export async function postData(url, values) {
  let response = await axios.post(url, values)
  return response
}

export async function putData(url, values, token) {
  let response = await axios.put(url, values)
  return response
}

export async function deleteItem(url) {
  let response = await axios.delete(url)
  return response
}
