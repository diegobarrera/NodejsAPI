'use strict'

const RealtimeDatabase = require('../configuration/firebase')

class Contact {
  constructor (userId, name, phone, email) {
    this.userId = userId
    this.name = name
    this.phone = phone
    this.email = email
  }

  async save () {
    try {
      const contactRef = RealtimeDatabase.ref(`contacts/${this.userId}`)
      const newContactRef = contactRef.push()
      await newContactRef.set({
        name: this.name,
        email: this.email,
        phone: this.phone
      })
      return newContactRef.toString()
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = Contact
