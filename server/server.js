process.env.NODE_ENV = 'production'

const path = require('path')
const express = require('express')
const cors = require('cors')
const request = require('superagent')
const unsplashRoutes = require('./unsplash')
<<<<<<< HEAD
=======

>>>>>>> f599a6b6822b53917821f74c7a2ec1defd13cd76
const server = express()
const dotenv = require('dotenv')

dotenv.config()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

// server.use(
//   cors({
//     origin: 'https://campanion.vercel.app/',
//     optionsSuccessStatus: 200,
//   })
// )

// const corsOptions = {
//   origin: 'https://campanion.vercel.app',
//   optionsSuccessStatus: 200,
// }

// server.use(cors(corsOptions))

server.get(`/api/v2/campsites`, (req, res) => {
  request
    .get(`https://api.doc.govt.nz/v2/campsites?coordinates=nzgd2000`)
    .set('x-api-key', process.env.DOC_API_KEY)
    .then((response) => {
      res.json(response.body)
    })
    .catch((e) => console.log(e.message))
})

server.get(`/api/v2/campsite-news`, (req, res) => {
  request
    .get(`https://api.doc.govt.nz/v2/campsites/alerts`)
    .set('x-api-key', process.env.DOC_API_KEY)
    .then((response) => {
      res.json(response.body)
    })
    .catch((e) => console.log(e.message))
})

server.use('/api/v2/unsplash', unsplashRoutes)


module.exports = server
