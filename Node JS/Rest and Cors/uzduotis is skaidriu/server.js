const express = require('express');
const cors = require('cors');

const PORT = 3000;
const app = express();

const names = ["Alex", "Rose", "Megan"];

app.use(cors({
  origin: 'http://127.0.0.1:5500'
}))

app.use(express.json());

// patekus į GET /api/users - grąžinti masyvą su 3 string'ais, kurie tiesiog bus vardai (["Alex", "Rose", "Megan"] - jis bus Jūsų database)
// patekus į GET /api/users/{:firstLetter} - grąžinti masyve vardus, kurie prasideda firstLetter parametru nurodyta raide.
// patekus į POST /api/users - pirdės naują vardą į masyvą ir grąžins atnaujintą visų vardų masyvą.

app.get('/api/users', (req, res)=>{
  res.json(names)
})

app.get('/api/users/:firstLetter', (req, res)=> {
  const { firstLetter } = req.params;

  const filtered = names.filter((name) => name[0] === firstLetter.toUpperCase());

  res.json(filtered)
})

app.post('/api/users', (req, res)=> {
  console.log(req.body);
  const { name } = req.body;
  
  names.push(name);

  res.json(names);
})

app.listen(PORT, ()=> {
  console.log(`Server listening on port ${PORT}`);
})