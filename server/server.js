const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const { addBill } = require('./controllers/billsController');
const { 
  addUser, getUser, createHousehold, createFirstUser, populateHousehold, populateHouseholdUser,
} = require('./controllers/userController');

const app = express();

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
  useFindAndModify: false,
};

mongoose.connect(url, options, (err, database) => {
  if (err) return console.error(err);
  db = database;
});

// application/json parser
const jsonParser = bodyParser.json();

// application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

/* ******************** Routes ******************** */
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

// app.get('/bills', (_req, res) => {

// })

app.post('/confirm', urlencodedParser, addUser, (_req, res) => {
  res.status(200).send();
});

app.post('/signup-household', jsonParser, createHousehold, createFirstUser, populateHousehold, populateHouseholdUser, (_req, res) => {
  res.status(200).send();
});

app.post('/signup', urlencodedParser, (_req, res) => {
  res.status(200).send();
});

app.post('/bills', jsonParser, addBill, (req, res) => {
  res.status(200).send();
});

app.get('/users', getUser, (req, res) => {
  res.status(200).send();
});

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
  app.listen(3000, () => { console.log('app listening on port:3000'); });
}

module.exports = {
  app,
  db,
};
