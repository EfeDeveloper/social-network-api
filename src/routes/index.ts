import { Router } from 'express';
import authRouter from './auth.router.js';
import userRouter from './user.router.js';
import postRouter from './post.router.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../../swagger.config.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/posts', postRouter);
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default router;
