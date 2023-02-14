import request from 'superagent'

export function fetchImages(search) {
  return request
    .get(`https://campanion.vercel.app/api/v1/unsplash/${search}`)
    .then((res) => res.body)
}
