
// const app = require('../server.js')

const dotenv = require('dotenv')
const cfg = {}

dotenv.config({ path: '.env' })

cfg.accountSid = process.env.TWILIO_ACCOUNT_SID
cfg.authToken = process.env.TWILIO_AUTH_TOKEN
cfg.sendingNumber = process.env.TWILIO_NUMBER

// {
//   accountSid: 'AC25bfcdb7dd7176fb3538996a402f96c6',
//   authToken: '6c623eea90ebe9cb5ffd57961e13fbae',
//   sendingNumber: '15167012722'
// }

console.log(cfg)
