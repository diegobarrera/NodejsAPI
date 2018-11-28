const request = require('supertest')
const { expect } = require('chai')
const app = require('../../src/app')

describe('Health Check', () => {
  context('GET /api', () => {
    it('Should receive an status 200 Ok', async () => {
      const fakeResponse = {
        status: 'ok',
        environment: 'test'
      }
      const response = await request(app)
        .get('/api')
        .set('Accept', 'application/json')
        .expect(200)

      expect(response.body).to.deep.equal(fakeResponse)
    })
  })
})
