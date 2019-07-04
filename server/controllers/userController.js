const { app, db } = require('../server.js');
const { User, Household } = require('../db-models/db-models');

const userController = {};

userController.createHousehold = (req, res, next) => {
  const { household } = req.body;
  const newHousehold = {
    name: household,
    topics: {
      bills: {},
    },
  };
  Household.create(newHousehold, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).end();
    }
    console.log(result);
    res.locals.household = result._id;
    next();
  });
};

userController.createFirstUser = (req, res, next) => {
  const { name, phone } = req.body;
  console.log(res.locals.household);
  const newUser = {
    username: name,
    phone_number: parseInt(phone, 10),
    household_id: res.locals.household,
  };
  User.create(newUser, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).end();
    }
    res.locals.user = user._id;
    console.log(user);
    return next();
  });
};

userController.populateHousehold = (req, res, next) => {
  User.findOne({
    _id: res.locals.user,
  }).populate("household_id").exec((err, household) => {
    if (err) {
      res.status(500).end();
      return console.error(err);
    }
    console.log(household);
    next();
  });
};

userController.populateHouseholdUser = (req, res, next) => {
  Household.findOneAndUpdate(
    { _id: res.locals.household },
    { $push: { users: res.locals.user } },
    { new: true },
  ).populate("users").exec((err, users) => {
    if (err) {
      res.status(500).end();
      return console.error(err);
    }
    console.log('Users', users);
    next();
  });
};

userController.addUser = (req, res, next) => {
  const { name, phone, household } = req.body;

  User.create({
    username: name,
    phone_number: parseInt(phone, 10),
    household,
  }, (err, newUser) => {
    if (err) {
      console.error(err);
      return res.status(500).send();
    }
    console.log(newUser);
    return next();
  });
};

userController.getUser = (req, res, next) => {
  let { phone } = req.query;
  phone = parseInt(phone, 10);
  User.findOne({ phone_number: phone }, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).end();
    }
    res.locals.user = user;
    next();
  });
};

module.exports = userController;
