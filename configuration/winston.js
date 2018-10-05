var appRoot = require('app-root-path')
var winston = require('winston')
const environment = process.env.NODE_ENV

const myFormat = winston.format.printf(info => {
  return `${info.level} => ${info.message} `
})

// define the custom settings for each transport (file, console)
var options = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/${environment}.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: 'info',
    handleExceptions: true,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.simple(),
      winston.format.colorize(),
      myFormat
    )
  }
}
const fileTransport = new winston.transports.File(options.file)
const consoleTransport = new winston.transports.Console(options.console)

// instantiate a new Winston Logger with the settings defined above
var logger = winston.createLogger({
  transports: [fileTransport, consoleTransport],
  exitOnError: false // do not exit on handled exceptions
})

if (environment === 'production') {
  logger.remove(consoleTransport)
}

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write: function (message, encoding) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message)
  }
}

module.exports = logger
