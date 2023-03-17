import request from 'superagent'

const endpoint = 'https://api.doc.govt.nz'

export function getCampsites() {
  return request.get(`/api/v2/campsites`).then((res) => res.body)
}

export function getCampsiteNews() {
  return request.get(`/api/v2/campsite-news`).then((res) => res.body)
}

export function getCampsiteDetailed() {
  return request.get(`/api/v2/campsite-details`).then((res) => res.body)
}

export function getCampsiteDetailed() {
  return request.get('/api/v1/campsite-details').then((res) => res.body)
}
