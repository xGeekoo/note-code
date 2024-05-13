const app = require('./app');

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () =>
  console.log(`Server listening for request on PORT ${PORT}`)
);
