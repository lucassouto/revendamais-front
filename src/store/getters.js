const getters = {
  nextResults: state => {
    if (state.itemsSearch[state.itemsSearch.length - 1] === undefined) {
      return ''
    } else {
      const nextResults = state.itemsSearch[state.itemsSearch.length - 1].search_metadata.next_results
      if (nextResults !== '' && nextResults !== undefined) {
        return nextResults.substring(1)
      } else {
        return ''
      }
    }
  }
}

export default getters
