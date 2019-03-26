import * as types from '../types'
import { Loading } from 'element-ui';
// import { loadFromlLocal, savaToLocal } from '../../utils/storage'

const state = {
  isLoading: false,
}

const actions = {
  setLoading ({ commit }, toggle) {
    commit(types.MM_SET_LOADING, toggle)
  },
}

const getters = {
  isLoading: state => state.isLoading,
}

const mutations = {
  [types.MM_SET_LOADING] (state, toggle) {
    if(state.isLoading && toggle) {
      return
    }
    state.isLoading = toggle
    // if(state.isLoading) {
    //   Loading.service({});
    // }else {
    //   Loading.close();
    // }
  },
}

export default {
  state,
  actions,
  getters,
  mutations
}
