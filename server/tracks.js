// const express = require('express')
// const request = require('superagent')

// const router = express.Router()

// router.use(express.json())

// // DEPARTMENT OF CONSERVATION APIS
// // GET /api/v1/tracks
// router.get('/:tracks', (req, res) => {
//   request
//     .get(`https://api.doc.govt.nz/v1/tracks?coordinates=wgs84`)
//     .set('x-api-key', process.env.DOC_API_KEY)
//     .then((response) => {
//       res.json(response.body)
//     })
//     .catch((err) => {
//       res.status(500).send(err.message)
//     })
// })
// import request from 'superagent'

// // coordinate
// export function getTracks() {
//   return request.get('/api/v1/walking').then((res) => res.body)
// }

// module.exports = router
