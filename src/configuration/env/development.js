'use strcit'

const configuration = {
  postgresDB: {
    uri: process.env.DB_URI || 'postgres://postgres:@localhost:5432/postgres',
    options: {
      operatorsAliases: false,
      ssl: false,
      dialectOptions: {
        ssl: false
      }
    }
  },
  firebaseDB: {
    apiKey: 'AIzaSyDd8_RgweRwrYCaJQkJMjt3bCe6XRe4uMM',
    authDomain: 'addressbookstrvdev.firebaseapp.com',
    databaseURL: 'https://addressbookstrvdev.firebaseio.com',
    logging: true
  }
}

module.exports = configuration
