import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import router from './router.js';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 3000
const PORT = process.env.PORT

mongoose.connect(MONGO_URI, () => {
    console.log('Connected')
});

const app = express()
app.use(router)

app.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`)
})