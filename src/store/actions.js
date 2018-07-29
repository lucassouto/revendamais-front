const actions = {
  resultsSearch (context, results) {
    context.commit('resultsSearch', results)
  },
  setTitleSearch (context, query) {
    context.commit('setTitleSearch', query)
  },
  scrollResults (context, results) {
    context.commit('scrollResults', results)
  },
  clearResults (context) {
    context.commit('clearResults')
  }
}

export default actions
