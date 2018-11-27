'use strict'

const firebase = require('firebase')
const {
  firebaseDB
} = require('../configuration/env')

const credentials = {
  apiKey: firebaseDB.apiKey,
  authDomain: firebaseDB.authDomain,
  databaseURL: firebaseDB.databaseURL
}
firebase.initializeApp(credentials)
firebase.database.enableLogging(firebaseDB.logging)

const database = firebase.database()

module.exports = database
