'use strict'

const { postgresDB } = require('../configuration/env')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(postgresDB.uri, postgresDB.options)
const db = {}

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
