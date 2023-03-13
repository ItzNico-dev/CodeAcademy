import express from 'express';
import {
  createNewUser,
  getAllUsers,
  getNameAndId,
  getNameEmailAndId,
  getNameAddressAndId,
} from '../controllers/controllers.js';

const router = express.Router();

router.get('/api/users/names', getNameAndId);
router.get('/api/users/emails', getNameAndId);
router.get('/users/emails', getNameEmailAndId);
router.get('/users/address', getNameAddressAndId);
router.get('/api/users', getAllUsers);

router.post('/api/users', createNewUser);

export default router;
