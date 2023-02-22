import pg from 'pg';
import express from 'express';
const pool = pg.Pool


const PORT = 3000
const connectionString = 'postgres://ugyflcgo:vlWgeatA73ppn6ooIAXch6knwt6Wc3dQ@trumpet.db.elephantsql.com/ugyflcgo'

const PGpool = new pool({
    connectionString
})

const app = express()


app.get('/people', async (req,res) => {
    const people = await PGpool.query('select * from persons')

    res.json(people)
})

app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`) 
})
