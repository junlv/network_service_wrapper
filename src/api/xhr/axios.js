import request from 'axios'
// import qs from 'qs'
// import obey from 'obey'
// import { commonParams,  } from './config'
// import router from '@/router'

request.defaults.timeout = 5000
request.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
request.defaults.baseURL = window.MIMI_IF_URL
// request.defaults.withCredentials = true
// request.defaults.baseURL = '/debug/'

// const resValidateModel = obey.model({
//   errno: {type: 'number', required: true},
//   errmsg: {type: 'string', allowNull: true, empty: true},
//   data: {type: 'object', allowNull: true, empty: true}
// })

const xhr = () => {
 
}

export default xhr
