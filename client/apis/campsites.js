import request from 'superagent'

export function getCampsites() {
  const token = localStorage.getItem('token')
  return request
    .get('https://campanion.vercel.app/api/v1/campsites')
    .set('Authorization', `Bearer ${token}`)
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
