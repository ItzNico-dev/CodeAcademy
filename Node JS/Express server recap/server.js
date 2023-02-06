import express from 'express';
import routes from './src/routes/index.js';
const PORT = 4000;
const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});