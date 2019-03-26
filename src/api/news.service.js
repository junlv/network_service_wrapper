import BaseService from './base.service.js'

class TestNewsService extends BaseService {
  fetchData (param) {
    return super.fetchData('POST', 'test/test', param || {})
  }
}
export default TestNewsService
