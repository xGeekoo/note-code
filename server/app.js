const path = require('node:path');
const express = require('express');
const AppError = require('./utils/AppError');

const noteRoutes = require('./routes/noteRoutes');
const errorController = require('./controllers/errorController');

const app = express();

app.set('json spaces', 2);

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use('/api/v1/notes', noteRoutes);

app.all('*', (req, res) => {
  throw new AppError(
    `The requested resource (${req.path}) was not found on the server.`,
    404
  );
});

app.use(errorController);

module.exports = app;
