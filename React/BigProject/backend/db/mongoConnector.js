import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

function mongoConnector() {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log('connected to mongoDB');
    })
    .catch((err) => {
      console.log('error connecting');
    });
}

export default mongoConnector;
