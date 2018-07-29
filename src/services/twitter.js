import Http from './http'

export const getTrends = (woeid = '') => {
  if (woeid !== '') {
    return Http.get(`/trends/${woeid}/`)
      .then(response => response.data)
  } else {
    return Http.get(`/trends/`)
      .then(response => response.data)
  }
}

export const getLocationsTrends = () => {
  return Http.get(`/locations/`)
    .then(response => response.data)
}

export const getLastResearchs = () => {
  return Http.get('/latestsearches/')
    .then(response => response.data)
}

export const getSearch = term => {
  return Http.get(`/search/${term}/`)
    .then(response => response.data)
}

export const getSearchNext = query => {
  return Http.get(`/search-raw-query/${query}/`)
    .then(response => response.data)
}
