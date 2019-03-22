import xhr from './xhr/fetch'
import config from './xhr/config'
export default class BaseService {
  constructor ({ paging = false, page = 1, pagesize = 20} = {}) {
    this._isPaging = paging
    this._page = page
    this._use_token = true
    this._pagesize = pagesize
    this._expire = 0
    this._cache = null
    this._commonParam = {
      client: config.client,
      version: config.version
    }

  }

  page (page) {
    this._page = page
    return this
  }

  token (_use_token) {
    this._use_token = _use_token
    return this
  }

  enablePaging () {
    this._isPaging = true
  }

  pageSize (pagesize) {
    this._pagesize = pagesize
    return this
  }

  loadData (method, url, body) {
    let page = {}
    if (this._isPaging) {
      page.page = this._page
      page.pagesize = this._pagesize
    }

    let url_ = config.SERVER_API_PATH + '/' + url
    let method_ = method || 'GET'

    return xhr({
      method: method_,
      url: url_,
      body: Object.assign(this._commonParam, body, page),
      expire: this._expire
    })
  }
}
