import express from 'express';
import { getItems, postItem, deleteItem } from './controllers.js'
import { checkLimit, checkBody, checkForId } from './middleware.js';

const router = express.Router();

router.get('/items', checkLimit, getItems);

router.post('/items', checkBody, postItem);

router.delete('/items/:id', checkForId, deleteItem);

export default router;