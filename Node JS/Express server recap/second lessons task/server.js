import express from 'express';
import cors from 'cors';

const PORT = 3000;
const app = express();

app.use(cors());

const cars = ['BMW', 'VW', 'Porsche'];

app.get('/', (req, res) => {
  res.json(cars);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});