import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    itemsSearch: [],
    titleSearch: ''
  },
  getters: {
    nextResults: state => {
      if (state.itemsSearch[state.itemsSearch.length - 1].search_metadata === undefined) {
        return ''
      } else {
        return state.itemsSearch[state.itemsSearch.length - 1].search_metadata.next_results.substring(1)
      }
    }
  },
  mutations: mutations,
  actions: actions
})

export default store
