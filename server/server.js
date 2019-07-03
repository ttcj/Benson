const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

// application/json parser
const jsonParser = bodyParser.json()

// application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/test', (_req, res) => {
  res.status(200).send('hello world')
})

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

// app.get('/bills', (_req, res) => {

// })

app.post('/signup', urlencodedParser, (_req, res) => {

})

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
  app.listen(3000)
}

console.log(`app listening on port:3000`)

module.exports = app
