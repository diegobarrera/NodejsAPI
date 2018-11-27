class AppError extends Error {
  constructor(type, message, status) {
    super(message)
    this.type = type
    this.status = status
  }
}

class Unauthorized extends AppError {
  constructor(type = 'Unauthorized', message = 'Not authorized.') {
    super(type, message, 401)
  }
}

module.exports = {
  AppError,
  Unauthorized
}