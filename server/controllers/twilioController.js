// const app = require('../server.js')

dotenv.config({ path: '../../.env' })

const dotenv = require('dotenv')
const cfg = {}

dotenv.config({ path: '.env' })

cfg.accountSid = process.env.TWILIO_ACCOUNT_SID
cfg.authToken = process.env.TWILIO_AUTH_TOKEN
cfg.sendingNumber = process.env.TWILIO_NUMBER

// cfg at this point is:
// {
//   accountSid: 'AC25bfcdb7dd7176fb3538996a402f96c6',
//   authToken: '6c623eea90ebe9cb5ffd57961e13fbae',
//   sendingNumber: '15167012722'
// }

const userController = {}

userController.signUp = (req, res, next) => {
  // it should get the form data
  req.on('')
  // if the form data is invalid, it should respond with a 400
  // else
  // it should generate a confirmation code as a KVP tied to the form data's phone number

  // and then return a 200
}
