import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
export type AuthUser = { id: string; role: 'ADMINISTRATOR' | 'INVESTOR'; phone: string };
declare global { namespace Express { interface Request { user?: AuthUser } } }
export function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'Authentication required' });
  try { req.user = jwt.verify(token, process.env.JWT_SECRET || 'dev-secret') as AuthUser; next(); }
  catch { return res.status(401).json({ message: 'Invalid token' }); }
}
export const requireRole = (...roles: AuthUser['role'][]) => (req: Request, res: Response, next: NextFunction) => roles.includes(req.user!.role) ? next() : res.status(403).json({ message: 'Forbidden' });
