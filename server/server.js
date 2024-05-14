const path = require('node:path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, 'config.env') });

const mongoose = require('mongoose');
const app = require('./app');

async function main() {
  await mongoose.connect(`${process.env.DB_HOST}/${process.env.DB_NAME}`);
  console.log('Database connected');
  const PORT = Number(process.env.PORT) || 3000;
  app.listen(PORT, () =>
    console.log(`Server listening for request on PORT ${PORT}`)
  );
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
