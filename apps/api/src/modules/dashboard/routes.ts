import { Router } from 'express';
import { prisma } from '../../config/prisma.js';
import { auth } from '../../middleware/auth.js';
const router = Router();
router.get('/dashboard', auth, async (_req, res) => {
  const [investors, pendingWithdrawals, interestPaid, withdrawals] = await Promise.all([
    prisma.investor.findMany(), prisma.withdrawalRequest.count({ where: { status: 'PENDING' } }),
    prisma.transaction.aggregate({ where: { type: 'INTEREST' }, _sum: { amount: true } }),
    prisma.transaction.aggregate({ where: { type: 'WITHDRAWAL' }, _sum: { amount: true } })
  ]);
  const totalInvestment = investors.reduce((s, i) => s + Number(i.currentCapital), 0);
  const monthlyInterest = investors.reduce((s, i) => s + Number(i.currentCapital) * Number(i.interestRate) / 100 / 12, 0);
  res.json({ cards: { totalInvestment, totalInvestors: investors.length, totalMonthlyInterest: monthlyInterest, interestPaid: Number(interestPaid._sum.amount || 0), pendingInterest: monthlyInterest, capitalGrowth: totalInvestment, totalWithdrawals: Number(withdrawals._sum.amount || 0), netPortfolio: totalInvestment - Number(withdrawals._sum.amount || 0), pendingWithdrawals }, charts: { monthlyInvestment: [], monthlyInterestPayout: [], capitalGrowth: [], investorGrowth: [] } });
});
export default router;
