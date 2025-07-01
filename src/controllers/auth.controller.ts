import { Request, Response } from 'express';
import { loginUser } from '../services/auth.service.js';
import { handleControllerError } from '../utils/errorResponse.js';

export const login = async (req: Request, res: Response) => {
  const { alias, password } = req.body;
  if (!alias || !password) {
    res.status(400).json({ error: 'Alias and password are required.' });
    return;
  }

  try {
    const result = await loginUser(alias, password);
    res.json(result);
  } catch (error) {
    handleControllerError(res, error, 'Login failed.');
  }
};
