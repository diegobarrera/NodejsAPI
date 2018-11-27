'use strict'

const userController = require('../controllers/user')
const contactController = require('../controllers/contact')

const healthCheck = (req, res, next) => {
  try {
    res.json({
      status: 'ok'
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
