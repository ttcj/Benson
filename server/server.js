const express = require('express')
// const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.get('/test', (_req, res) => {
  res.status(200).send('hello world')
})

app.listen(3000)

console.log(`app listening on port:3000`)

module.exports = app
