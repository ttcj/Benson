const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// application/json parser
const jsonParser = bodyParser.json();

// application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

/* ******************** DB Connection ******************** */
// Connection URI
const url = 'mongodb://heroku_4n2clldv:j3e80jsh2tes5b7r970bejgtq4@ds245927.mlab.com:45927/heroku_4n2clldv';
let db;
// Connection options
const options = {
  keepAlive: 1,
  connectTimeoutMS: 30000,
  reconnectTries: 30,
  reconnectInterval: 5000,
  useNewUrlParser: true,
};

mongoose.connect(url, options, (err, database) => {
  if (err) return console.error(err);
  db = database;
  return console.log('Connected to database');
});

/* ******************** Routes ******************** */
app.get('/test', (_req, res) => {
  res.status(200).send('hello world')
});

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

// app.get('/bills', (_req, res) => {

// })

app.post('/signup', urlencodedParser, (_req, res) => {

});

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
  app.listen(3000);
}

console.log(`app listening on port:3000`)

module.exports = {
  app,
  db,
};
