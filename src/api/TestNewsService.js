import BaseService from './BaseService'

class TestNewsService extends BaseService {
  request (param) {
    return super.request('POST', 'test/test', param || {})
  }
}
export default TestNewsService
