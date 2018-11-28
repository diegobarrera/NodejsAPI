'use strcit'

const configuration = {
  postgresDB: {
    uri: process.env.DATABASE_URL,
    options: {
      dialect: 'postgres',
      operatorsAliases: false,
      ssl: true,
      dialectOptions: {
        ssl: true
      }
    }
  },
  firebaseDB: {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: 'addressbookstrvdev.firebaseapp.com',
    databaseURL: 'https://addressbookstrvdev.firebaseio.com',
    logging: true
  },
  authentication: {
    saltRounds: 8,
    jwtSecret: process.env.AUTH_KEY,
    jwtOptions: {
      expiresIn: '1h',
      algorithm: 'HS256'
    }
  }
}

module.exports = configuration
