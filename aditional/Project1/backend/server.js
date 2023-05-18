import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Main',
  })
  .then(() => {
    console.log('Connected to the Database.');
  })
  .catch((err) => console.error(err));

app.listen(PORT, console.log(`Server listening on port: ${PORT}`));
