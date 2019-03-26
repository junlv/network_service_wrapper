import 'whatwg-fetch'

import reform from './reform'
import validate from './validate'
import Msg from '../../util/message'

const xhr = ({ url, method, body = {} ,headers = {} }) => {

  return new Promise((resolve, reject) => {

    let param_ = body || {}
    let apiUrl = url

    if (method === 'POST') {
      param_ = Object.keys(param_).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(param_[key])).join('&')
    } else {
      let paramArr = []
      Object.keys(param_).forEach(key => paramArr.push(key + '=' + param_[key]))
      apiUrl = apiUrl + '?' + paramArr.join('&')
    }

    fetch(apiUrl, {
      method: method,
      headers:headers,
      mode: 'cors',
      body: param_
    }).then(res => {
      return res.json()
    }).then(function (data) {
      return validate(data)
    }).catch((error) => {
      reject(error)
    }).then(function (data) {
       resolve(reform(data))
    }).catch((error) => {
        console.warn(error)
        reject(Msg.M2002)
    })
  })
}

export default xhr
