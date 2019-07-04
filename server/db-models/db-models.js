const mongoose = require('mongoose');

const { Schema } = mongoose;

/* ******************** Schema Definitions ******************** */
const userSchema = new Schema({
  username: String,
  phone_number: {
    type: Number,
  },
  household_id: {
    type: Schema.Types.ObjectId,
    ref: 'Household',
  },
});

const householdSchema = new Schema({
  users: [{
    type: Schema.ObjectId,
    ref: 'User',
  }],
  name: String,
  topics: {
    bills: { type: Schema.Types.Mixed },
  },
});

/* ******************** Model Definitions ******************** */
const Household = mongoose.model('Household', householdSchema);
const User = mongoose.model('User', userSchema);

/* ******************** Model Export ******************** */
module.exports = {
  Household,
  User,
};
