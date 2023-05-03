import express from 'express';
import {
  register,
  login,
  addPermissions,
  writeStuff,
} from '../controllers/index.js';
const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/permissions/:id', writeStuff, addPermissions);
router.post('/writestuff');

export default router;
