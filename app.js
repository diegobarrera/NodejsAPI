'use strict'
const express = require('express')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const winston = require('./configuration/winston')
const app = express()

const indexRouter = require('./src/routes/index')
const usersRouter = require('./src/routes/index')

app.use(morgan('combined', {
  stream: winston.stream
}))
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/users', usersRouter)

const errorHandler = (err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // winston error logging
  winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`)

  // render the error page
  res.status(err.status || 500)
  res.render('error')
}
app.use(errorHandler)

module.exports = app
