'use strict'

const { sequelize } = require('../../src/configuration/sequilize')

const cleanDB = () => {
  return sequelize.sync({ force: true })
}

module.exports = { cleanDB }
