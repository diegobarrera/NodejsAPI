'use strict'

const request = require('supertest')
const { expect } = require('chai')
const app = require('../../src/app')
const { generateToken } = require('../../src/utils/authLogic')
const sinon = require('sinon')

describe('Contact', () => {
  context('POST /api/contact', () => {
    let firebaseUrl = 'https://namedatabase.firebaseio.com/contacts/2018/-LSMG344EiwSznvUCisB'
    before(() => {
      const { Contact } = require('../../src/models')
      sinon.stub(Contact.prototype, 'save').returns(
        Promise.resolve(firebaseUrl)
      )
    })

    it('Should create a contact', async () => {
      const fakeContact = {
        contact: {
          email: 'test1@strv.com',
          name: 'contact test name',
          phone: '358838383'
        }
      }

      // Assuming the user with the id 1 is logged in
      const userId = 1
      const jwtToken = generateToken(userId)

      const authToken = `Bearer ${jwtToken}`
      const response = await request(app)
        .post('/api/contact')
        .set('Accept', 'application/json')
        .set('Authorization', authToken)
        .send(fakeContact)
        .expect(200)

      expect(response.body).to.have.property('url')
      expect(response.body.url).to.be.a('string')
      expect(response.body).to.deep.equal({ url: firebaseUrl })
    })
  })
})
