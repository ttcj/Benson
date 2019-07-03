const app = require('../server.js')

const userController = {}

userController.signUp = (req, res, next) => {
  // it should get the form data
  // if the form data is invalid, it should respond with a 400
  // else
  // it should generate a confirmation code as a KVP tied to the form data's phone number
  // and then return a 200
}
