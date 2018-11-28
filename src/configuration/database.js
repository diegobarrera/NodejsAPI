'use strict'

const config = require('../configuration/env')

module.exports = {
  development: {
    url: config.postgresDB.uri,
    dialect: config.postgresDB.options.dialect
  },
  test: {
    url: config.postgresDB.uri,
    dialect: config.postgresDB.options.dialect
  },
  production: {
    url: config.postgresDB.uri,
    dialect: config.postgresDB.options.dialect
  }
}
