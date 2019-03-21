import BaseService from './BaseService'

class TestNewsService extends BaseService {
  loadData (body) {
    return super.loadData('POST', 'test/test', body || {})
  }
}
export default TestNewsService
