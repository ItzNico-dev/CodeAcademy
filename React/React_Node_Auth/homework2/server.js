import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

const app = express();

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('connected'))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`));
