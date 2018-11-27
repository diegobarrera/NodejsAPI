'use strict'

const path = require('path')
const { sequelize } = require('../configuration/sequilize')
const User = sequelize.import(path.join(__dirname, '/user.js'))
const Contact = require('../models/contact')

module.exports = {
  User,
  Contact
}
