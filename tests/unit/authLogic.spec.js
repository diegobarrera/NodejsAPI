'use strict'

const { expect } = require('chai')
const authLogic = require('../../src/utils/authLogic')

describe('Unit Tests', () => {
  describe('Authentication Module', () => {
    it('Should exists', () => {
      expect(authLogic.generateToken).to.be.a('function')
      expect(authLogic.validateToken).to.be.a('function')
      expect(authLogic.hashPassword).to.be.a('function')
      expect(authLogic.isValidPassword).to.be.a('function')
    })

    it('Should generate a valid JWT token from a numeric Id', () => {
      const userId = 2018
      const jwtToken = authLogic.generateToken(userId)
      const decodedUser = authLogic.validateToken(jwtToken)
      expect(decodedUser).to.be.a('object')
      expect(decodedUser).to.include({ id: userId })
    })

    it('Should generate a valid JWT token from an alphanumeric id', () => {
      const userId = 'STRV-2018'
      const jwtToken = authLogic.generateToken(userId)
      const decodedUser = authLogic.validateToken(jwtToken)
      expect(decodedUser).to.be.a('object')
      expect(decodedUser).to.include({ id: userId })
    })

    it('Should throw an error with malformed jwtToken', () => {
      const jwtToken = 'eYstrvalksjlaihknagslygukeuygaybksbasb'
      const decodedUser = () => authLogic.validateToken(jwtToken)
      expect(decodedUser).to.be.a('function')
      expect(decodedUser).to.throw()
    })

    it('Should throw an error with an empty jwtToken', () => {
      const jwtToken = ''
      const decodedUser = () => authLogic.validateToken(jwtToken)
      expect(decodedUser).to.be.a('function')
      expect(decodedUser).to.throw()
    })

    it('Should hash plain password of length 60', async () => {
      const password = 'passwordForTesting'
      const hashedPassword = await authLogic.hashPassword(password)
      expect(hashedPassword).to.be.a('string').lengthOf(60)
    })

    it('Should be a valid password', async () => {
      const password = 'passwordForTesting'
      const hashedPassword = await authLogic.hashPassword(password)
      const isValid = await authLogic.isValidPassword(password, hashedPassword)
      expect(isValid).to.be.a('boolean').to.equal(true)
    })

    it('Should be an invalid password', async () => {
      const password = 'passwordForTesting'
      const anotherPassword = 'anotherPasswordForTesting'
      const hashedPassword = await authLogic.hashPassword(password)
      const isValid = await authLogic.isValidPassword(anotherPassword, hashedPassword)
      expect(isValid).to.be.a('boolean').to.equal(false)
    })
  })
})
