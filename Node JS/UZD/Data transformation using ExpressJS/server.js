import express from 'express'
import mainRoute from './src/index.js'
const PORT = 3000
const app = express()

app.use(mainRoute)

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})