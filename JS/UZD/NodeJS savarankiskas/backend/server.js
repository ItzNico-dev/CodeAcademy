import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI, () => {
    console.log('connected')
})