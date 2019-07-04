require('mongoose');
const { app, db } = require('../server.js');

const billController = {};

billController.addBill = (req, res, next) => {
  const { name, amount } = req.body;
  // Validate bill data
  if (!name || !amount || !/\d/.test(amount)) {
    return res
      .status(400)
      .set('Content-Type', 'text/plain')
      .send('Invalid bill');
  }

  next();
};

// app.get('/bills', (req, res) => {
// res.status()
// })

module.exports = billController;
