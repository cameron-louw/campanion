import request from 'superagent'

export function getCampsites() {
  return request
    .get('https://campanion.vercel.app/api/v1/campsites')
    .then((res) => res.body)
}

export function getCampsiteNews() {
  return request
    .get('https://campanion.vercel.app/api/v1/campsite-news')
    .then((res) => res.body)
}

export function getCampsiteDetailed() {
  return request
    .get('https://campanion.vercel.app/api/v1/campsite-details')
    .then((res) => res.body)
}
