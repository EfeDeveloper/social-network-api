import { NextFunction, Response } from 'express';
import { AuthRequest } from '../types/jwt.js';
import { createPost, getAllPosts } from '../services/post.service.js';
import { createError } from '../types/customError.js';

export const createPostController = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.userId;
    const { message } = req.body;

    if (!userId) throw createError('User not authenticated.', 401);

    if (!message) throw createError('The message is required.', 400);

    const post = await createPost(userId, message);

    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

export const getPostsController = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.userId;
    if (!userId) throw createError('User not authenticated.', 401);

    const posts = await getAllPosts(userId);
    res.json(posts);
  } catch (error) {
    next(error);
  }
};
