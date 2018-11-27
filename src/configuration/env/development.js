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
  }
}

module.exports = configuration
