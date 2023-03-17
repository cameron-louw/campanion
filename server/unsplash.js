const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

const dotenv = require('dotenv')
dotenv.config()

const accessKey = process.env.ACCESS_KEY

<<<<<<< HEAD
// GET /api/v1/unsplash
=======
>>>>>>> f599a6b6822b53917821f74c7a2ec1defd13cd76
router.get('/:search', (req, res) => {
  request
    .get(
      `https://api.unsplash.com/search/photos?client_id=${accessKey}&page=1&query=${req.params.search}`
    )
    .then((result) => {
      res.json(result.body.results)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
