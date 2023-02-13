// // consuming external apis, 3 step
// import request from 'superagent'

// export async function fetchImages(search) {
//   const images = await request.get(`/api/v1/unsplash/${search}`)
//   const our_images = images.body
//   console.log(our_images)
//   return our_images
// }

// consuming external apis, 3 step
import request from 'superagent'

export function fetchImages(search) {
  return request.get(`api/v1/unsplash/${search}`).then((res) => res.body)
}
