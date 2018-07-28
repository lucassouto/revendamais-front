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

export const getSearch = query => {
  return Http.get(`/search/${query}/`)
    .then(response => response.data)
}
