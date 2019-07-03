const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/* ******************** DB Connection ******************** */

// Connection URL
const url = `mongodb://heroku_4n2clldv:j3e80jsh2tes5b7r970bejgtq4@ds245927.mlab.com:45927/heroku_4n2clldv`;

//Connection options
const options = {
  keepAlive: 1, 
  connectTimeoutMS: 30000, 
  reconnectTries: 30, 
  reconnectInterval: 5000,
  useNewUrlParser: true
};

mongoose.connect(url, options);

/* ******************** Schema Definitions ******************** */
const userSchema = new Schema({
  username: String,
  phone_number: {
    type: Number,
    min: 10,
    max: 10
  },
  household_id: {
    type: Schema.ObjectId,
    ref: 'Household'
  }
});

const householdSchema = new Schema({
  users: [{
    type: Schema.ObjectId,
    ref: 'User'
  }],
  name: String,
  lists: {
    bills: { type: Schema.Types.Mixed }
  }
});

/* ******************** Model Definitions ******************** */
const Household = mongoose.model('Household', householdSchema);
const User = mongoose.model('User', userSchema);

/* ******************** Model Export ******************** */
exports = module.exports = {
  Household,
  User
}








