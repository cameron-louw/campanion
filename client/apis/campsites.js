import request from 'superagent'

const endpoint = 'https://api.doc.govt.nz'

export function getCampsites() {
  return request.get(`${endpoint}/api/v2/campsites`).then((res) => res.body)
}

export function getCampsiteNews() {
  return request.get(`${endpoint}/api/v2/campsite-news`).then((res) => res.body)
}

export function getCampsiteDetailed() {
  return request
    .get(`${endpoint}/api/v2/campsite-details`)
    .then((res) => res.body)
}
