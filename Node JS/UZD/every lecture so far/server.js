import express from "express";
import router from './router.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`)
})