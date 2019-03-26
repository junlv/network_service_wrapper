export function MIMI_CACHE_KEY () {
  let userkey = window.localStorage.ukey
  if (!userkey) {
    return 'MM_CACHE_KEY'
  }
  return userkey
}


export const MM_SET_LOADING = 'MM_SET_LOADING'
