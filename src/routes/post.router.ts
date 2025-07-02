import { Router } from 'express';
import { authenticateJWT } from '../middlewares/authenticateJWT.middleware.js';
import { createPostController } from '../controllers/post.controller.js';

const router = Router();

router.post('/profile', authenticateJWT, createPostController);

export default router;
