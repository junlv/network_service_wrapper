import 'whatwg-fetch'
import config from './config'
import response from './response'
// import router from '@/router'

const xhr = ({ url, method, body = {} }) => {
  return new Promise((resolve, reject) => {
    let apiUrl = config.SERVER_API_PATH + '/' + url
    let method_ = method || 'GET'
    let param_ = body || {}
    if (method_ === 'POST') {
      param_ = Object.keys(param_).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(param_[key])).join('&')
    } else {
      let paramArr = []
      Object.keys(param_).forEach(key => paramArr.push(key + '=' + param_[key]))
      apiUrl = apiUrl + '?' + paramArr.join('&')
    }
    console.log(apiUrl)

    fetch(apiUrl, {
      method: method_,
      headers: {
        'token': config.token,
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      mode: 'cors',
      body: param_
    }).then(res => {
      return res.json()
    }).then(function (data) {
        resolve(response(data))
    }).catch((error) => {
        config.errHandler(error)
        reject({ msg: '无法访问服务', code: -1 })
    })
  })
}

export default xhr
