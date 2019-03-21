import xhr from './xhr/fetch'
export default class BaseService {
  constructor ({ paging = false, page = 1, pagesize = 20 } = {}) {
    this._isPaging = paging
    this._page = page
    this._pagesize = pagesize
    this._expire = 0
    this._cache = null
    this.commonParam = {
      client: 1,
      version: '0.0.0'
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
    return xhr({
      method: method,
      url: url,
      body: Object.assign(this.commonParam, body, page),
      expire: this._expire
    })
  }
}
