import express from 'express';
const router = express.Router();
import {
  validateId,
  validateOrderBody,
  validateCustomerBody,
  validateOrderBodyInBulk,
} from '../middleware/validators.js';
import {
  createNewCustomer,
  getAllCustomers,
} from '../controllers/customerControllers.js';
import {
  createNewOrder,
  getCustomerOrdersById,
  addOrdersInBulk,
} from '../controllers/orderControllers.js';

router.post('/customer', validateCustomerBody, createNewCustomer);
router.post(
  '/customer/:id/order',
  validateId,
  validateOrderBody,
  createNewOrder
);
router.get('/customer/:id/order', validateId, getCustomerOrdersById);
router.get('/customer', getAllCustomers);
router.post(
  '/customer/:id/order/bulk',
  validateId,
  validateOrderBodyInBulk,
  addOrdersInBulk
);

export default router;