const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const HEROES =require('./heroes')

app.use(cors())

app.get('/heroes/:id', (req, res) => {
  res.json(HEROES.find(h => {return h.id == req.params.id}))
})

app.get('/heroes', (req, res) => {
  res.json(HEROES)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})