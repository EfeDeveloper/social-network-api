import { Request } from 'express';

export interface JwtPayload {
  userId: string;
  alias: string;
  iat?: number;
  exp?: number;
}

export interface AuthRequest extends Request {
  user?: JwtPayload;
}
