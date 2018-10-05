'use strict'
const express = require('express')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const winston = require('./configuration/winston')
const app = express()

var indexRouter = require('./src/routes/index')
var usersRouter = require('./src/routes/index')

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

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // add this line to include winston logging
  // winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`)

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
