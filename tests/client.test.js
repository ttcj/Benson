const request = require('supertest')
const app = require('../server/server')

describe('Test the root path', () => {
  test('It should respond with a status code of 200', async () => {
    const response = await request(app).get('/test').expect(200)
  })
})
