import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { prisma } from '../../config/prisma.js';
const router = Router();
router.post('/login', async (req, res) => {
  const body = z.object({ phone: z.string().min(6), password: z.string().min(6) }).parse(req.body);
  const user = await prisma.user.findUnique({ where: { phone: body.phone } });
  if (!user || !(await bcrypt.compare(body.password, user.password))) return res.status(401).json({ message: 'Invalid phone or password' });
  const token = jwt.sign({ id: user.id, role: user.role, phone: user.phone }, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '8h' });
  res.json({ token, user: { id: user.id, phone: user.phone, role: user.role } });
});
router.post('/logout', (_req, res) => res.json({ ok: true }));
export default router;
