import { Router } from 'express';
import { authenticateJWT } from '../middlewares/authenticateJWT.middleware.js';
import { createPostController, getPostsController } from '../controllers/post.controller.js';
import { likePostController } from '../controllers/like.controller.js';

const router = Router();

router.post('/', authenticateJWT, createPostController);
router.get('/', authenticateJWT, getPostsController);
router.post('/:id/like', authenticateJWT, likePostController);

export default router;
