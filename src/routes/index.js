const express = require('express')
const router = express.Router()

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
