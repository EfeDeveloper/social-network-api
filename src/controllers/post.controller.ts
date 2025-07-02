import { Request, Response } from 'express';
import { AuthRequest } from '../types/jwt.js';
import { createPost, getAllPosts } from '../services/post.service.js';
import { handleControllerError } from '../utils/errorResponse.js';

export const createPostController = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    const { message } = req.body;

    if (!userId) {
      res.status(401).json({ error: 'User not authenticated.' });
      return;
    }
    if (!message) {
      res.status(400).json({ error: 'The message is required.' });
      return;
    }

    const post = await createPost(userId, message);

    res.status(201).json(post);
  } catch (error) {
    handleControllerError(res, error, 'Error when creating the publication.');
  }
};

export const getPostsController = async (_req: Request, res: Response) => {
  try {
    const posts = await getAllPosts();
    res.json(posts);
  } catch (error) {
    handleControllerError(res, error, 'Error obtaining publications.');
  }
};
