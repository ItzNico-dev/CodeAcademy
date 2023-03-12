import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/router.js'
dotenv.config();

const PORT = process.env.PORT || 3000;
const connectionString = process.env.MongoUri || '';
const resources = process.env.dataUri || '';

mongoose
  .connect(connectionString)
  .then(console.log(`connected on port ${PORT}`))
  .catch(console.error);

const app = express();

app.use(express.json());
app.use(router)
