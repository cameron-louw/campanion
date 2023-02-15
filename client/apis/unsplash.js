import request from 'superagent'

const endpoint = 'https://campanion.vercel.app'

export function fetchImages(search) {
  return request
    .get(`${endpoint}/api/v1/unsplash/${search}`)
    .then((res) => res.body)
}
