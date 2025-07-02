import { Router } from 'express';
import { authenticateJWT } from '../middlewares/authenticateJWT.middleware.js';
import { createPostController, getPostsController } from '../controllers/post.controller.js';

const router = Router();

router.post('/', authenticateJWT, createPostController);
router.get('/', authenticateJWT, getPostsController);

export default router;
