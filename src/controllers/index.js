'use strict'

const userController = require('../controllers/user')
const contactController = require('../controllers/contact')
const environment = process.env.NODE_ENV

const healthCheck = (req, res, next) => {
  try {
    res.json({
      status: 'ok',
      environment
    })
  } catch (e) {
    next(e)
  }
}

module.exports = {
  userController,
  contactController,
  healthCheck
}
