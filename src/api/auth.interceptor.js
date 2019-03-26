import config from './xhr/config'
import Bee from '../util/bee'
import Msg from '../util/message'
import $store from '../vuex/store'
// import Vue from 'vue'

const __fetch_start = (target) => {
  console.log(`${target.requestid()}::__fetch_start`)
  if(target._isLoading) {
    $store.dispatch('setLoading',true)
  }
}


const __fetch_before_validate = (target, param) => {
  console.log(`${target.requestid()}::__fetch_before_validate`)
  if (target._with_token && !Bee.StringUtils.isNotBlank(config.token)) {
    return false;
  }
  return true;
}

const __fetch_after = (target) => {
  console.log(`${target.requestid()}::__fetch_after`)
  if(target._isLoading) {
    $store.dispatch('setLoading',false)
  }
  return true;
}

const __fetch_after_error = (target,err) => {
  console.log(`${target.requestid()}::__fetch_after_error`)
  if(target._isLoading) {
    $store.dispatch('setLoading',false)
  }
  if(err.code && err.code === 10001) {
    // $router.push( {name:'login'})
  }
  return true;
}


function FetchInterceptor(target) {
  let func = target.fetchData;
  target.fetchData = function () {

    var params = [].slice.call(arguments);

    __fetch_start(target, ...arguments)

    return new Promise((resolve, reject) => {

      if (!__fetch_before_validate(target, params)) {
       return reject(Msg.M2003)
      }

      var promise = func.bind(target, ...arguments)()
      promise.then((data) => {
        resolve(data)
        __fetch_after(target, data)
      }).catch((err) => {
        reject(err)
        __fetch_after_error(target, err)
      })
    })
  }
  return target
}

export default FetchInterceptor