import { Router } from 'express'; import { prisma } from '../../config/prisma.js'; import { auth } from '../../middleware/auth.js';
const router = Router(); router.get('/notifications', auth, async (req,res)=>res.json(await prisma.notification.findMany({ where:{ userId:req.user!.id }, orderBy:{ createdAt:'desc' } }))); export default router;
