const express = require('express')
const cors = require('cors')

const PORT = 3000
const app = express()

const names = ["Alex", "Rose", "Megan"]


app.use(cors({
    origin: 'http://127.0.0.1:5500/'
}))

// app.get('/', (req,res) => {
//     res.json({success: true})
// })

// app.post((req,res) => {
//     res.json({hello : 'Post was successful'})
// })

// app.listen((PORT, () => {
// console.log(`server listening on port : ${PORT}`)
// }))

//!----------------------------------------------



app.get('/api/users', (req,res) => {
    res.json(names)
})

app.get('/api/users/:firstLetter', (req,res) => {
    const firstLetter = req.params

    const filtered = names.filter((name) => name[0] === firstLetter)

    res.json(names)
})