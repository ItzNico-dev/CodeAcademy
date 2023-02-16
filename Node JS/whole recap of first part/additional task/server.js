
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config()

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI, () => {
    console.log('Connected')
})

const app = express()

app.use(cors())
app.use(express.json())
