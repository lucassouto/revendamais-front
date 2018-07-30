const getters = {
  nextResults: state => {
    if (state.itemsSearch[state.itemsSearch.length - 1] === undefined) {
      return ''
    } else {
      const x = state.itemsSearch[state.itemsSearch.length - 1].search_metadata.next_results
      if (x !== '') {
        return x.substring(1)
      } else {
        return ''
      }
    }
  }
}

export default getters
