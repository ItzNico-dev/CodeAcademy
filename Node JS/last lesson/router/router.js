import express from 'express';
import {
  createNewUser,
  getAllUsers,
  getNameAndId,
} from '../controllers/controllers.js';

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/names', getNameAndId);
router.get('/users/emails');
router.get('/users/address',);
router.post('/users', createNewUser);

export default router;
