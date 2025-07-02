import { Response } from 'express';
import { AuthRequest } from '../types/jwt.js';
import { toggleLikePost } from '../services/like.service.js';
import { handleControllerError } from '../utils/errorResponse.js';

export const likePostController = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    const { id: postId } = req.params;

    if (!userId) {
      res.status(401).json({ error: 'User not authenticated.' });
      return;
    }

    const result = await toggleLikePost(postId, userId);
    res.status(200).json(result);
  } catch (error) {
    handleControllerError(res, error, 'Error when toggling like.');
  }
};
