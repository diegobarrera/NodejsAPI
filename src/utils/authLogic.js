const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { authentication } = require('../configuration/env')

const generateToken = (id) => {
  const data = {
    id: id
  }
  const options = authentication.jwtOptions
  try {
    const token = jwt.sign(data, authentication.jwtSecret, options)
    return token
  } catch (error) {
    throw new Error(error)
  }
}

const validateToken = (token) => {
  try {
    const decoded = jwt.verify(token, authentication.jwtSecret)
    return decoded
  } catch (error) {
    throw new Error(error)
  }
}

const hashPassword = async (password) => {
  try {
    var salt = bcrypt.genSaltSync(authentication.saltRounds)
    const hash = await bcrypt.hashSync(password, salt)
    return hash
  } catch (error) {
    throw new Error(error)
  }
}

const isValidPassword = async (plainPassword, hashedPassword) => {
  try {
    const isValid = await bcrypt.compareSync(plainPassword, hashedPassword)
    return isValid
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  generateToken,
  validateToken,
  hashPassword,
  isValidPassword
}
