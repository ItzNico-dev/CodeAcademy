import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('connected'))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`application running on port ${PORT}`));
