import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { AuthRequest, JwtPayload } from '../types/jwt.js';

const JWT_SECRET = process.env.JWT_SECRET as string;

export const authenticateJWT = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Access Denied, no token provided' });
    return;
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    req.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};
