import request from 'superagent'

export function fetchImages(search) {
  return request.get(`api/v1/unsplash/${search}`).then((res) => res.body)
}
