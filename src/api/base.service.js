import xhr from './xhr/fetch'
import config from './xhr/config'
import Bee from '../util/bee'
// import ProxyMiddleware  from './middlewares'
class BaseService {
  constructor ({ paging = false, page = 1, pagesize = 20 } = {}) {
    this._isPaging = paging
    this._page = page
    this._with_token = false
    this._pagesize = pagesize
    this._expire = 0
    this._cache = null
    this._isLoading = false
    this._interceptors = []
    this._commonParam = {
      client: config.client,
      version: config.version
    }
    this._request_id = Bee.StringUtils.rndNum(10)
    // return ProxyMiddleware(this)
  }

  page (page) {
    this._page = page
    return this
  }

  requestid (){
    return this._request_id
  }

  withToken (with_token) {
    this._with_token = with_token
    return this
  }

  withLoaidng (isLoading) {
    this._isLoading = isLoading
    return this
  }

  enablePaging () {
    this._isPaging = true
  }

  pageSize (pagesize) {
    this._pagesize = pagesize
    return this
  }

  __BEFORE() {}
  __AFTER() {}
  
  fetchData (method, url, body = {}) {

    let page = {}

    if (this._isPaging) {
      page.page = this._page
      page.pagesize = this._pagesize
    }

    let url_ = config.SERVER_API_PATH + '/' + url
    let method_ = method || 'GET'

    let headers =  {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }

    if(this._with_token) {
      headers.token =  config.token
    }

    return xhr({
      method: method_,
      url: url_,
      body: Object.assign(this._commonParam, body, page),
      headers: headers
    })
  }

  static fetchData (method, url, body) {
   return (new this()).fetchData(method, url, body)
  }
}

export default BaseService