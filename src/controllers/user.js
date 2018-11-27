'use strict'

const { User } = require('../models')
const { hashPassword } = require('../modules/authLogic')

const registration = async (req, res, next) => {
  try {
    const hashedPassword = await hashPassword(req.body.user.password)
    const user = {
      email: req.body.user.email,
      hashedPassword: hashedPassword
    }
    const userObj = await User.createUser(user)
    res.json(userObj.serialize())
  } catch (error) {
    next(error)
  }
}

module.exports = {
  registration
}
