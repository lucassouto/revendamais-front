import Http from './http'

export const getTrends = trends => {
  return Http.get('/trends')
    .then(response => response.data)
}

export const getLastResearchs = lastResearchs => {
  return Http.get('/last-researchs')
    .then(response => response.data)
}

export const getSearch = query => {
  return Http.get(`/search/${query}`)
    .then(response => response.data)
}
