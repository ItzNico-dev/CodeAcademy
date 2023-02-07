import express from "express";

const PORT = 3000

const app = express()

//! static
app.get('/api',(req,res) => {
    res.send('labas')
})

//!dinamic
app.get('/api/:id', (req,res) => {
    res.send(`${req.params.id}`)
})

//!dinamic
app.get('/api/users/:userId/posts/:postId', (req,res) => {
    res.send(`userId: ${req.params.userId} postId: ${req.params.postId}`)
})


app.listen(PORT, () => {
    console.log(`server is listening om port: ${PORT}`)
})