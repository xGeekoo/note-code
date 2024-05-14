class AppError extends Error {
  constructor(message, statusCode) {
    if (!message || !statusCode) {
      throw new Error('Please provide a message and a status code');
    }

    super(message);
    this.statusCode = statusCode;
    this.status = String(statusCode).startsWith('4') ? 'fail' : 'error';
    this.showError = true;
  }
}

module.exports = AppError;
