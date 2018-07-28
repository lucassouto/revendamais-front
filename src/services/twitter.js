import Http from './http'

export const getTrends = (woeid = '') => {
  return Http.get(`/trends/${woeid}`)
    .then(response => response.data)
}

export const getLastResearchs = () => {
  return Http.get('/latestsearches/')
    .then(response => response.data)
}

export const getSearch = query => {
  return Http.get(`/search/${query}`)
    .then(response => response.data)
}
