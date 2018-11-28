'use strcit'

const configuration = {
  postgresDB: {
    uri: process.env.DB_URI || 'postgres://postgres:@localhost:5432/postgres',
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
    apiKey: 'aaa',
    authDomain: 'aaaa.firebaseapp.com',
    databaseURL: 'https://aaa.firebaseio.com',
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
