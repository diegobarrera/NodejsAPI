const request = require('supertest')
const { expect } = require('chai')
const app = require('../../src/app')
const { cleanDB } = require('../utils')

describe('User', () => {
  const userBody = {
    user: {
      email: 'test1@strv.com',
      password: 'supersecret'
    }
  }
  context('POST /api/user/signUp', () => {
    beforeEach(cleanDB)

    it('Should create a new user', async () => {
      const response = await request(app)
        .post('/api/user/signUp')
        .set('Accept', 'application/json')
        .send(userBody)
        .expect(200)

      expect(response.body).to.not.have.property('password')
      expect(response.body).to.include.keys(['id', 'email', 'createdAt', 'updatedAt'])
    })
  })

  context('POST /api/users/signIn', () => {
    beforeEach(cleanDB)

    it('Should return the JWT token', async () => {
      await request(app)
        .post('/api/user/signUp')
        .set('Accept', 'application/json')
        .send(userBody)
        .expect(200)

      const response = await request(app)
        .post('/api/user/signIn')
        .set('Accept', 'application/json')
        .send(userBody)
        .expect(200)

      expect(response.body).to.have.property('token')
      expect(response.body.token).to.be.a('string')
    })
  })
})
