import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './router/router.js'

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || '';

mongoose
  .connect(MONGO_URI)
  .then(console.log(`connecting to ${MONGO_URI}`))
  .catch(console.error);

const app = express();
app.use(express.json());
app.use(router)

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT} `);
});
