'use strict'

const environment = process.env.NODE_ENV || 'development'
const winston = require('../configuration/winston')

const errorHandler = (err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = environment === 'development' ? err : {}

  winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`)

  res.status(err.status || 500)
  res.json({
    error: err.message
  })
}
module.exports = {
  errorHandler
}
