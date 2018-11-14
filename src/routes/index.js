const path = require('path')
const express = require('express')
const router = express.Router()
const swaggerSpec = require('../docs/swaggerDef')

/**
 * @swagger
 * /:
 *   get:
 *     description: Healtcheck
 *     responses:
 *       200:
 *         description: ok
 */
router.get('/', function (req, res, next) {
  try {
    res.json({
      status: 'ok'
    })
  } catch (e) {
    next(e)
  }
})

// Documentation
router.get('/swagger.json', (req, res) => {
  try {
    res.json(swaggerSpec)
  } catch (e) {
    next(e)
  }
})
router.get('/docs', (req, res) => {
  try {
   res.sendFile(path.join(__dirname, '../docs/index.html'))
  } catch (e) {
    next(e)
  }
})

module.exports = router
