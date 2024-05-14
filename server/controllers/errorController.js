function errorController(err, req, res, next) {
  const status = err.status || 'error';
  const statusCode = err.statusCode || 500;
  const message = err.showError ? err.message : 'Something went wrong.';

  console.log(err);
  res.status(statusCode).json({ status, message, err });
}

module.exports = errorController;
