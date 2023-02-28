import express from 'express';
import {
  getAllCars,
  postNewCar,
  deleteCarById,
  getCarsById,
} from '../controllers/controllers.js';

const router = express.Router();

router.get('/cars', getAllCars);

router.get('/cars/:id', getCarsById);

router.post('/cars', postNewCar);

router.delete('/cars/:id', deleteCarById);

export default router;
