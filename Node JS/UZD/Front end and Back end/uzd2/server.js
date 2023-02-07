import express, { json } from "express"
import cors from "cors"

const people = [
    {
        name: 'Petras',
        surname: 'Slekys'
    },
    {
        name: 'Jonas',
        surname: 'Kazlauskas'
    }
]

const PORT = 3000
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
    res.json(people)
})

app.post('/', (req,res) => {
    const { name, surname } = req.body

    const data = {
        name,
        surname
    }

    people.push(data)

    res.json({
        success: true
    })
})

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})