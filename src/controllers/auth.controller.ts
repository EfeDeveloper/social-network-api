import { NextFunction, Request, Response } from 'express';
import { loginUser } from '../services/auth.service.js';
import { createError } from '../types/customError.js';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { alias, password } = req.body;
    if (!alias || !password) throw createError('Alias and password are required.', 401);
    const result = await loginUser(alias, password);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
