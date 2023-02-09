/* eslint-disable no-console */
import express from 'express';

const { MongoClient } = require('mongodb');

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
