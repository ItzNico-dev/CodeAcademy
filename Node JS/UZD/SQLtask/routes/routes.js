import express from 'express';
const router = express.Router();
import { getTenCheapestShirts, createNewItem } from '../controllers/controllers.js';

router.get('/',)
router.get('/shirts', getTenCheapestShirts)
router.post('/shirts', createNewItem)

export default router;