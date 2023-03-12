import express from 'express';
const router = express.Router();

router.get('posts');
router.get('posts/title');
router.get('/posts/body');
router.post('/posts');

export default router;
