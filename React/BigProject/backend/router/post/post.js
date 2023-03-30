import express from 'express';
import {
  createNewPost,
  deletePostById,
  getAllPostsById,
} from '../../controllers/posts/index.js';
const router = express.Router();

router.post('/post', createNewPost);
router.delete('/post/:id', deletePostById);
router.get('/post/:id', getAllPostsById);

export default router;
