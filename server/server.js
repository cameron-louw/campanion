process.env.NODE_ENV = 'production'

const path = require('path')
const express = require('express')

const cors = require('cors')
const request = require('superagent')

const unsplashRoutes = require('./unsplash')

const server = express()
const dotenv = require('dotenv')
dotenv.config()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

const corsOptions = {
  origin: 'https://campanion.vercel.app',
  optionsSuccessStatus: 200,
}

server.use(cors(corsOptions))
// server.use(cors('*'))

server.get('https://campanion.vercel.app/api/v1/tracks', (req, res) => {
  request
    .get(`https://api.doc.govt.nz/v1/tracks?coordinates=nzgd2000`)
    .set('x-api-key', process.env.DOC_API_KEY)
    .then((response) => {
      res.json(response.body)
    })
    .catch((e) => console.error(e))
})

server.get('https://campanion.vercel.app/api/v1/campsites', (req, res) => {
  request
    .get(`https://api.doc.govt.nz/v2/campsites?coordinates=nzgd2000`)
    .set('x-api-key', process.env.DOC_API_KEY)
    .then((response) => {
      res.json(response.body)
    })
    .catch((e) => console.log(e.message))
})

server.get('https://campanion.vercel.app/api/v1/campsite-news', (req, res) => {
  request
    .get(`https://api.doc.govt.nz/v2/campsites/alerts`)
    .set('x-api-key', process.env.DOC_API_KEY)
    .then((response) => {
      res.json(response.body)
    })
    .catch((e) => console.log(e.message))
})

server.use('/api/v1/unsplash', unsplashRoutes)

module.exports = server
