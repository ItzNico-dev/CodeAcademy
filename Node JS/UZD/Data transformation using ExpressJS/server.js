import express from 'express'
import { listenerCount } from 'process'
const PORT = 3000
const app = express()

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})