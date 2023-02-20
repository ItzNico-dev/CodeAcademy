import express from 'express';
import { createNewClient, addNewOrder, getUserWithAllHisOrders } from '../controllers/controllers.js';
const router = express.Router();

// POST new client
// POST new order
// GET client and all his orders

router.post('/client', createNewClient);

router.post('/order/:clientId', addNewOrder);

router.get('/client/:id', getUserWithAllHisOrders);

export default router;
