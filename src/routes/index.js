'use strict'

const express = require('express')
const router = express.Router()
const { authenticate } = require('../middlewares/authentication')
const { userController } = require('../controllers')

router.get('/', function (req, res, next) {
  try {
    res.json({
      status: 'ok'
    })
  } catch (e) {
    next(e)
  }
})

router.post('/users/signUp', userController.registration)
router.post('/users/signIn', userController.login)

module.exports = router
