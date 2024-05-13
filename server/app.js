const path = require('node:path');
const express = require('express');

const postRoutes = require('./routes/postRoutes');

const app = express();

app.set('json spaces', 2);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/notes', postRoutes);

app.all('*', (req, res) => {
  throw new Error(
    `The requested resource (${req.path}) was not found on the server.`
  );
});

app.use((err, req, res, next) => {
  res.status(404).json({ status: 'fail', message: err.message });
});

module.exports = app;
