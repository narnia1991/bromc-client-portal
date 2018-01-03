import Cookies from 'universal-cookie'
import CryptoJS from 'crypto-js'
import AES from 'crypto-js/aes'

const cookies = new Cookies()

export function setCookie(token) {
  const encrypted = AES.encrypt(token, 'pylon').toString()

  cookies.set('token', encrypted, { path: '/' })
}

export function getCookie() {
  const encrypted = cookies.get('token')

  const bytes = CryptoJS.AES.decrypt(encrypted.toString(), 'pylon')

  return bytes.toString(CryptoJS.enc.Utf8)
}

export function removeCookie() {
  cookies.set('token', ' ', { path: '/' })
}
