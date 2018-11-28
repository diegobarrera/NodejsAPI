'use strict'

const { validateToken } = require('../utils/authLogic')

const authenticate = async function (req, res, next) {
  try {
    let jwtToken = req.headers.authorization
    if (jwtToken.startsWith('Bearer ')) {
      jwtToken = jwtToken.slice(7, jwtToken.length)
    }
    const decoded = await validateToken(jwtToken)
    req.currentUser = decoded
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  authenticate
}
