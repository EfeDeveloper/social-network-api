import { NextFunction, Response } from 'express';
import { AuthRequest } from '../types/jwt.js';
import { getUserProfile } from '../services/profile.service.js';
import { createError } from '../types/customError.js';

export const getProfile = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.userId;
    if (!userId) throw createError('User not authenticated.', 401);

    const user = await getUserProfile(userId);

    if (!user) {
      res.status(404).json({ error: 'User not found.' });
      return;
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
};
