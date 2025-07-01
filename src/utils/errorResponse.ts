import { Response } from 'express';

export function handleControllerError(
  res: Response,
  error: unknown,
  message = 'Something went wrong.'
) {
  if (error instanceof Error) {
    res.status(500).json({ error: error.message });
  } else {
    res.status(500).json({ error: message });
  }
}
