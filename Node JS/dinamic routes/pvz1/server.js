import express from "express";

const PORT = 3000

const app = express()

//! static
app.get('/api',(req,res) => {
    res.send('babas')
})

//!dynamic
app.get('/api/:id', (req,res) => {
    res.send(`${req.params.id}`)
})

//!dynamic
app.get('/api/users/:userId/posts/:postId', (req,res) => {
    res.send(`userId: ${req.params.userId} postId: ${req.params.postId}`)
})


app.listen(PORT, () => {
    console.log(`server is listening om port: ${PORT}`)
})

