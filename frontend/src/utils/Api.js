import axios from 'axios'
import { getCookie } from './cookieLoader'

axios.defaults.baseURL = ''
axios.defaults.headers.post['Content-Type'] = 'application/json'

export async function tableData(url, params) {
  const res = await axios.get(url, {
    params,
    headers: { 'X-Auth-Token': getCookie() },
  })

  const data = res.data

  return data
}

export async function viewData(url) {
  const res = await axios.get(url, { headers: { 'X-Auth-Token': getCookie() } })

  const data = res.data

  return data
}

export async function postData(url, values) {
  let response = await axios.post(url, values)
  return response
}

export async function putData(url, values, token) {
  let response = await axios.put(url, values, {
    headers: { 'X-Auth-Token': token ? getCookie() : null },
  })
  return response
}

export async function deleteItem(url) {
  let response = await axios.delete(url, {
    headers: { 'X-Auth-Token': getCookie() && getCookie() },
  })
  return response
}
