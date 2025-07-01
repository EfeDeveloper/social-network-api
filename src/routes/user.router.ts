import { Router } from 'express';
import { authenticateJWT } from '../middlewares/authenticateJWT.middleware.js';
import { getProfile } from '../controllers/profile.controller.js';

const router = Router();

router.get('/profile', authenticateJWT, getProfile);

export default router;
