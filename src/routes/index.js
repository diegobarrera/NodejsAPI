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
  res.send('ok')
})

// Documentation
router.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
})
router.get('/docs', (req, res) => {
    res.sendFile(path.join(__dirname, '../docs/index.html'))
})

module.exports = router
