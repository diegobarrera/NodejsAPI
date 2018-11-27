'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      notNull: true,
      type: DataTypes.STRING,
      isEmail: true
    },
    hashedPassword: {
      notNull: true,
      type: DataTypes.STRING
    }
  }, {
    indexes: [{
      unique: true,
      fields: ['email']
    }],
    timestamp: true
  })

  // Class Method
  User.createUser = async (newUser) => {
    try {
      const user = await User.create(newUser)
      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  User.getByEmail = async (email) => {
    try {
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  // Instance Method
  User.prototype.serialize = function () {
    return {
      id: this.id,
      email: this.email,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }
  }

  return User
}
