import request from 'superagent'
// import { router } from '../../server/server'

// coordinate
export function getTracks() {
  return request
    .get('http://campanion.vercel.app/api/v1/tracks')
    .then((res) => res.body)
}

// export function getNorthlandTracks() {
//   return request.get('/api/v1/nav').then((res) => res.body)
// }
