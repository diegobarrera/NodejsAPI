'use strict'
const express = require('express')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const winston = require('../src/configuration/winston')
const { errorHandler } = require('../src/middlewares/errorHandler')
const app = express()

const indexRouter = require('../src/routes/index')

app.use(morgan('combined', {
  stream: winston.stream
}))
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))
app.use(cookieParser())

app.use('/api', indexRouter)

app.use(errorHandler)

process.on('unhandledRejection', (reason, p) => {
  throw reason
})
process.on('uncaughtException', (error) => {
  errorHandler(error)
  process.exit(1)
})

module.exports = app
