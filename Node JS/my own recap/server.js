// import casual from 'casual';

// console.log(casual.city)
// console.log(Math.floor((Math.random() * 10) + 1))
// console.log(casual.name_suffix + casual.name + casual.last_name)

import express from 'express';
import cors from 'cors'
import cars from './db.js';

const PORT = 3000

const app = express()

app.use(cors())

app.get('/cars', async (req,res) => {
    res.json(cars)
})

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})