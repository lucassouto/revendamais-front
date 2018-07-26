const actions = {
  resultsSearch (context, results) {
    context.commit('resultsSearch', results)
  },
  setTitleSearch (context, query) {
    context.commit('setTitleSearch', query)
  }
}

export default actions
