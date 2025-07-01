import { Response } from 'express';
import { AuthRequest } from '../types/jwt.js';
import { getUserProfile } from '../services/profile.service.js';
import { handleControllerError } from '../utils/errorResponse.js';

export const getProfile = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      res.status(401).json({ error: 'User not authenticated.' });
      return;
    }

    const user = await getUserProfile(userId);

    if (!user) {
      res.status(404).json({ error: 'User not found.' });
      return;
    }

    res.json(user);
  } catch (error) {
    handleControllerError(res, error, 'Error obtaining the profile.');
  }
};
