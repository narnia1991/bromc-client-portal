/**
 * @Author: Junar B. Alinsub
 * @Date:   2017-12-30T18:52:10+08:00
 * @Email:  junaralinsub2@gmail.com
 * @Filename: validate_credit.js
 * @Last modified by:   Junar B. Alinsub
 * @Last modified time: 2018-01-01T21:06:02+08:00
 * @License: MIT
 * @Copyright: use it however you like, just buy me coffee next time
 */

// takes the form field value and returns true on valid number
export const valid_credit_card = value => {
  // accept only digits, dashes or spaces
  if (/[^0-9-\s]+/.test(value)) return false

  // The Luhn Algorithm. It's so pretty.
  var nCheck = 0,
    nDigit = 0,
    bEven = false
  value = value.replace(/\D/g, '')

  for (var n = value.length - 1; n >= 0; n--) {
    var cDigit = value.charAt(n),
      nDigit = parseInt(cDigit, 10)

    if (bEven) {
      if ((nDigit *= 2) > 9) nDigit -= 9
    }

    nCheck += nDigit
    bEven = !bEven
  }

  return nCheck % 10 == 0
}

export const detectCardType = number => {
  const re = {
    electron: /^(4026|417500|4405|4508|4844|4913|4917)d+$/,
    maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)d+$/,
    dankort: /^(5019)d+$/,
    interpayment: /^(636)d+$/,
    unionpay: /^(62|88)d+$/,
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$/,
    amex: /^3[47][0-9]{13}$/,
    diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    jcb: /^(?:2131|1800|35d{3})d{11}$/
  }
  if (re.electron.test(number)) {
    return 'ELECTRON'
  } else if (re.maestro.test(number)) {
    return 'MAESTRO'
  } else if (re.dankort.test(number)) {
    return 'DANKORT'
  } else if (re.interpayment.test(number)) {
    return 'INTERPAYMENT'
  } else if (re.unionpay.test(number)) {
    return 'UNIONPAY'
  } else if (re.visa.test(number)) {
    return 'VISA'
  } else if (re.mastercard.test(number)) {
    return 'MASTERCARD'
  } else if (re.amex.test(number)) {
    return 'AMEX'
  } else if (re.diners.test(number)) {
    return 'DINERS'
  } else if (re.discover.test(number)) {
    return 'DISCOVER'
  } else if (re.jcb.test(number)) {
    return 'JCB'
  } else {
    return undefined
  }
}
