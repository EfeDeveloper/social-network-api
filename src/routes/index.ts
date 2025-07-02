import { Router } from 'express';
import authRouter from './auth.router.js';
import userRouter from './user.router.js';
import postRouter from './post.router.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/posts', postRouter);

router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default router;
