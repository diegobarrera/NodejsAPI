'use strict'

const express = require('express')
const router = express.Router()
const { authenticate } = require('../middlewares/authentication')
const { userController, contactController, healthCheck } = require('../controllers')

router.get('/', healthCheck)

router.post('/user/signUp', userController.registration)
router.post('/user/signIn', userController.login)

router.post('/contact', authenticate, contactController.addContact)

module.exports = router
