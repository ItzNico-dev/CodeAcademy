import express from 'express';
import { getAllUsers, getUserById, getUserByName, createNewUser, updateUser, deleteUser } from './controllers.js';


const router = express.Router();

router.get('/users', getAllUsers);

router.get('/users/:id', getUserById);

router.get('/users/name/:name', getUserByName);

router.post('/users', createNewUser);

router.delete('/users/:id', deleteUser);

router.put('/users/:id', updateUser);

export default router;