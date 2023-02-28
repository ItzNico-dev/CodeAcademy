import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from "./routes/routes.js";

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
