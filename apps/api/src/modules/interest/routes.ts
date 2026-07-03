import { Router } from 'express';
import { randomUUID } from 'crypto';
import { z } from 'zod';
import { prisma } from '../../config/prisma.js';
import { auth, requireRole } from '../../middleware/auth.js';
import { calculateInterest } from '../../utils/finance.js';
const router = Router();
router.post('/interest/generate', auth, requireRole('ADMINISTRATOR'), async (req, res) => {
  const b = z.object({ month: z.number().min(1).max(12), year: z.number(), addToCapital: z.boolean().default(false), preview: z.boolean().default(true) }).parse(req.body);
  const investors = await prisma.investor.findMany({ where: { status: 'ACTIVE' } });
  const rows = investors.map(i => ({ investorId: i.id, name: i.name, capital: Number(i.currentCapital), rate: Number(i.interestRate), interestEarned: calculateInterest(Number(i.currentCapital), Number(i.interestRate)), month: b.month, year: b.year }));
  if (b.preview) return res.json({ preview: true, rows, total: rows.reduce((s, r) => s + r.interestEarned, 0) });
  const batchId = randomUUID();
  await prisma.$transaction(rows.map(r => prisma.interestHistory.upsert({ where: { investorId_month_year: { investorId: r.investorId, month: b.month, year: b.year } }, update: {}, create: { investorId: r.investorId, month: b.month, year: b.year, capital: r.capital, rate: r.rate, interestEarned: r.interestEarned, credited: !b.addToCapital, addedToCapital: b.addToCapital, batchId } })));
  if (b.addToCapital) for (const r of rows) await prisma.investor.update({ where: { id: r.investorId }, data: { currentCapital: { increment: r.interestEarned } } });
  res.json({ batchId, rows });
});
export default router;
