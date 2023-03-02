import express from 'express';
const router = express.Router();
import { createNewCustomer, getAllCustomers } from '../controllers/customerControllers.js';
import { createNewOrder, getCustomerOrdersById } from '../controllers/orderControllers.js';

router.post('/customer', createNewCustomer)
router.post('/customer/:id/order', createNewOrder)
router.get('/customer/:id/order', getCustomerOrdersById)
router.get('/customer', getAllCustomers)

export default router;