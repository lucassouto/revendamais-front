const mutations = {
  resultsSearch (state, results) {
    state.itemsSearch.push(results)
  },
  setTitleSearch (state, title) {
    state.titleSearch = title
  },
  scrollResults (state, results) {
    state.itemsSearch.push(results)
  },
  clearResults (state) {
    state.itemsSearch = []
  }
}

export default mutations
