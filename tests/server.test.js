const request = require('supertest')
const app = require('../server/server')

const testSignupData =

describe('Test', () => {
  test('It should respond with a status code of 200', async () => {
    const response = await request(app)
      .get('/test')
      .expect(200)
  })
})

describe('Root', () => {
  it('should respond the index.html', async () => {
    const response = await request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=UTF-8')
  })
})

describe('Signup', () => {
  // const validSignupData = {
  //   name: 'Lucille',
  //   phoneNumber: 15554443333
  // }

  // missing a number in the phone number
  // in the case that a client-side validation fails
  // const invalidPhoneNumber = {
  //   name: 'Lucille',
  //   phoneNumber: 1555444333
  // }
  const validSignupData = 'name=%C3%89tienne&phone=1234567890&household=roommates'
  const invalidPhoneData = 'name=%C3%89tienne&phone=012345678&household=roommates'
  const missingSignupData = 'phone=0123456789'

  it('should respond with an error if the phone number is invalid', async () => {
    const response = await request(app)
      .post('/signup')
      .send(invalidPhoneData)
      .expect(400)
      .expect('Content-Type', 'text/plain')
      .expect('invalid phone number')
  })

  it('should respond with an error if a field in the form data is missing', async () => {
    const response = await request(app)
      .post('/')
      .send(missingSignupData)
      .expect(400)
      .expect('Content-Type', 'text/plain')
      .expect('missing name')
  })
  it('should respond with 200 if valid sign-up data is received', async () => {
    const response = await request(app)
      .post('/')
      .send(validSignupData)
      .expect(200)
      .expect('Content-Type', 'text/plain')
      .expect('Content-Length', '16')
  })
})
