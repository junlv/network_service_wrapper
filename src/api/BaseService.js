import xhr from './xhr/fetch'
import config from './xhr/config'
export default class BaseService {
  constructor ({ paging = false, page = 1, pagesize = 20 } = {}) {
    this._isPaging = paging
    this._page = page
    this._pagesize = pagesize
    this._expire = 0
    this._cache = null
    this.commonParam = {
      client: config.client,
      version: config.version
    }
  }

  setPage (page) {
    this._page = page
  }

  enablePaging () {
    this._isPaging = true
  }

  setPageSize (pagesize) {
    this._pagesize = pagesize
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
      body: Object.assign(this.commonParam, body, page),
      expire: this._expire
    })
  }
}
