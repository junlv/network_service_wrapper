import BaseService from './BaseService'

class TestNewsService extends BaseService {
  loadData (param) {
    return super.loadData('POST', 'test/test', param || {})
  }
}
export default TestNewsService
