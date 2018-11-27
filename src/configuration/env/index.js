'use strict'

const env = process.env.NODE_ENV || 'development'
const configPath = `../env/${env}`
const config = require(configPath)

module.exports = config
