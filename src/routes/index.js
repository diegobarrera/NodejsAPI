'use strict'

const express = require('express')
const router = express.Router()
const { authenticate } = require('../middlewares/authentication')

router.get('/', function (req, res, next) {
  try {
    res.json({
      status: 'ok'
    })
  } catch (e) {
    next(e)
  }
})

module.exports = router
