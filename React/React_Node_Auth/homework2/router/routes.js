import express from 'express';
import { RouterProvider } from 'react-router-dom';

const router = express.Router();

router.get('/api/posts');
router.get('/api/posts/:id');
router.put('/api/posts/:id');
router.delete('/api/posts/:id');

export default router;
