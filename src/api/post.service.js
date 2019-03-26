import BaseService from './base.service.js'
import FetchInterceptor  from './auth.interceptor.js'

class PostService  {

  static fetch ( method,param = {},withToken = true, withLoaidng = true) {

    let service = (new BaseService()).withToken(withToken).withLoaidng(withLoaidng)
    service = FetchInterceptor(service)

    return service.fetchData('POST', method, param)

  }
}
export default PostService
