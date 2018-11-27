'use strcit'

const configuration = {
  postgresDB: {
    uri: process.env.DB_URI,
    options: {
      dialect: 'postgres',
      operatorsAliases: false,
      ssl: false,
      dialectOptions: {
        ssl: false
      }
    }
  },
  firebaseDB: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    logging: true
  },
  authentication: {
    saltRounds: 8,
    jwtSecret: process.env.AUTH_KEY || 'secret',
    jwtOptions: {
      expiresIn: '1h',
      algorithm: 'HS256'
    }
  }
}

module.exports = configuration
