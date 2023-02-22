import pg from 'pg';
import express from 'express';
const pool = pg.Pool


const PORT = 3000
const connectionString = 'postgres://znlbfwtg:KLVTYRtCCA4UZX7kmD3dh_9sjBgJxsbE@trumpet.db.elephantsql.com/znlbfwtg'

const PGpool = new pool({
    connectionString
})

const app = express()


app.get('/people', async (req,res) => {
    const people = await PGpool.query('select * from people')

    res.json(people)
})

app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`) 
})
