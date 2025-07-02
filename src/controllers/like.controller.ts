import { NextFunction, Response } from 'express';
import { AuthRequest } from '../types/jwt.js';
import { toggleLikePost } from '../services/like.service.js';
import { createError } from '../types/customError.js';

export const likePostController = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.userId;
    const { id: postId } = req.params;

    if (!userId) throw createError('User not authenticated.', 401);

    const result = await toggleLikePost(postId, userId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
