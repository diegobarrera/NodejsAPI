'use strict'

const { Contact } = require('../models')

const addContact = async (req, res, next) => {
  try {
    const userId = req.currentUser.id
    const name = req.body.contact.name
    const phone = req.body.contact.phone
    const email = req.body.contact.email

    const contact = new Contact(userId, name, phone, email)
    const contactObj = await contact.save()
    res.json({
      url: contactObj
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  addContact
}
