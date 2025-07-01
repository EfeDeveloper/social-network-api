import { Request } from 'express';

export interface JwtPayload {
  userId: string;
  alias: string;
  iat?: number;
  exp?: number;
}

// Así puedes extender el Request para tu middleware y controllers
export interface AuthRequest extends Request {
  user?: JwtPayload;
}
