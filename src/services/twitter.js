import Http from './http'

export const getTrends = trends => {
  return Http.get('/trends')
}

export const getLastResearchs = lastResearchs => {
  return Http.get('/last-researchs')
}

export const getSearch = (search, extraParams = {}) => {
  const params = { search, ...extraParams }

  return Http.get('/search', params)
}
