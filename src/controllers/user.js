'use strict'

const { User } = require('../models')
const { hashPassword, isValidPassword, generateToken } = require('../modules/authLogic')

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

const login = async (req, res, next) => {
  try {
    let token = null
    const password = req.body.user.password
    const email = req.body.user.email
    const userObj = await User.getByEmail(email)

    if (!userObj) {
      return res.status(404).json('not found')
    }
    const isPasswordValid = await isValidPassword(password, userObj.hashedPassword)
    if (!isPasswordValid) {
      return res.status(401).json('unauthorized')
    } else {
      token = generateToken(userObj.id)
    }
    res.json({
      token: token
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  registration,
  login
}
