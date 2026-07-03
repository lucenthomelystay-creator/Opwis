import { Router } from 'express'; import { prisma } from '../../config/prisma.js'; import { auth } from '../../middleware/auth.js';
const router = Router(); router.get('/transactions', auth, async (_req,res)=>res.json(await prisma.transaction.findMany({ include:{ investor:true }, orderBy:{ date:'desc' }, take:200 }))); export default router;
