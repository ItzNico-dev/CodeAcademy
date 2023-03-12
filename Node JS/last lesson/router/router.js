import express from 'express';
import {
  createNewUser,
  getAllUsers,
  getNameAndId,
} from '../controllers/controllers.js';

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/nameAndId', getNameAndId);
router.get('/users/body');
router.post('/users', createNewUser);

export default router;
