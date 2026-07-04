import { Router } from 'express'; import { auth } from '../../middleware/auth.js';
const router = Router(); router.get('/reports', auth, (_req,res)=>res.json({ reports:['monthly','investor','interest','capital','withdrawal','tax'], formats:['pdf','xlsx'] })); export default router;
