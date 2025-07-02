import { NextFunction, Request, Response } from 'express';
import { isCustomError } from '../types/customError.js';

export const errorHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
) => {
  let statusCode = 500;
  let message = 'Internal Server Error';

  if (isCustomError(err)) {
    message = err.message;
    if (err.statusCode) statusCode = err.statusCode;
  }

  // eslint-disable-next-line no-console
  console.error(`🚀  -- [Error]: ${message}`, err);

  res.status(statusCode).json({ error: message });
};
