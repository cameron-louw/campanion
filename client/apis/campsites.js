import request from 'superagent'

const endpoint = 'https://api.vercel.com'

export function getCampsites() {
  return request.get(`${endpoint}/api/v1/campsites`).then((res) => res.body)
}

export function getCampsiteNews() {
  return request.get(`${endpoint}/api/v1/campsite-news`).then((res) => res.body)
}

export function getCampsiteDetailed() {
  return request
    .get(`${endpoint}/api/v1/campsite-details`)
    .then((res) => res.body)
}
