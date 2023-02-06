import express from "express"
import cors from 'cors'
const app = express()
const PORT = 3000
app.use(cors())


app.get("/src/db/data.js", (req, res) => {
  res.json(data)
})

app.post("/src/db/data.js", (req, res) => {
  let machine = req.body
  data.push(machine)
  res.json(machine)
})

app.listen(3000, () => {
  console.log(`server is running on port: ${PORT}`)
})
