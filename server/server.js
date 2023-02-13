const path = require('path')
const express = require('express')

const cors = require('cors')
const request = require('superagent')

const unsplashRoutes = require('./unsplash')
// require('dotenv').config()

const server = express()
const dotenv = require('dotenv')
dotenv.config()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

// DEPARTMENT OF CONSERVATION APIS
server.get('/api/v1/tracks', (req, res) => {
  request
    .get(`https://api.doc.govt.nz/v1/tracks?coordinates=nzgd2000`)
    .set('x-api-key', process.env.DOC_API_KEY)
    .then((response) => {
      res.json(response.body)
    })
    .catch((e) => console.error(e))
})

server.get('/api/v1/campsites', (req, res) => {
  request
    .get(`https://api.doc.govt.nz/v2/campsites?coordinates=nzgd2000`)
    .set('x-api-key', process.env.DOC_API_KEY)
    .then((response) => {
      res.json(response.body)
    })
    .catch((e) => console.log(e.message))
})

server.get('/api/v1/campsite-news', (req, res) => {
  request
    .get(`https://api.doc.govt.nz/v2/campsites/alerts`)
    .set('x-api-key', process.env.DOC_API_KEY)
    .then((response) => {
      res.json(response.body)
    })
    .catch((e) => console.log(e.message))
})
// GET /api/v1/unsplash
// server.get('/api/v1/unsplash/:search', (req, res) => {
//   request
//     .get(
//       `https://api.unsplash.com/search/photos?client_id=${accessKey}&page=1&query=${req.params.search}`
//     )
//     // .set('x-api-key', process.env.ACCESS_KEY)
//     .then((result) => {
//       res.json(result.body.results)
//     })
//     .catch((err) => {
//       res.status(500).send(err.message)
//     })
// })

server.use('https://campanion.vercel.app/api/v1/unsplash', unsplashRoutes)

module.exports = server
