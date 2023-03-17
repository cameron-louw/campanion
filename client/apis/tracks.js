import request from 'superagent'

export function getTracks() {
  return request.get('/api/v1/tracks').then((res) => res.body)
}
