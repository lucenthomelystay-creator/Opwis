import { Router } from 'express';
import multer from 'multer';
import xlsx from 'xlsx';
import bcrypt from 'bcryptjs';
import { prisma } from '../../config/prisma.js';
import { auth, requireRole } from '../../middleware/auth.js';
import { sanitizePhone } from '../../utils/finance.js';
const router = Router(); const upload = multer({ dest: 'uploads/' });
const aliases: Record<string,string[]> = { name:['investor name','name'], phone:['phone number','phone','mobile'], currentCapital:['capital','current capital'], interestRate:['interest %','interest rate','rate'], monthlyInterest:['monthly interest'], investmentDate:['investment date','date'], notes:['notes'] };
function mapRow(row: Record<string, unknown>) { const out: Record<string, unknown> = {}; for (const [key, names] of Object.entries(aliases)) { const found = Object.keys(row).find(k => names.includes(k.trim().toLowerCase())); if (found) out[key] = row[found]; } return out; }
router.post('/excel/import', auth, requireRole('ADMINISTRATOR'), upload.single('file'), async (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'Excel file required' });
  const sheet = xlsx.readFile(req.file.path).Sheets; const rows = xlsx.utils.sheet_to_json<Record<string, unknown>>(sheet[Object.keys(sheet)[0]]); const errors: unknown[] = []; let success = 0;
  for (const [index, raw] of rows.entries()) { const r = mapRow(raw); const phone = sanitizePhone(String(r.phone || '')); if (!phone || !r.name) { errors.push({ row:index+2, error:'Missing name or phone' }); continue; } const capital = Number(r.currentCapital || 0); const rate = Number(r.interestRate || 0); const password = await bcrypt.hash(phone.slice(-6).padStart(6,'0'), 12); const user = await prisma.user.upsert({ where:{phone}, update:{}, create:{phone,password,role:'INVESTOR'} }); await prisma.investor.upsert({ where:{ userId:user.id }, update:{ name:String(r.name), currentCapital:capital, interestRate:rate, notes:String(r.notes || '') }, create:{ userId:user.id, name:String(r.name), investmentDate:r.investmentDate ? new Date(String(r.investmentDate)) : new Date(), initialCapital:capital, currentCapital:capital, interestRate:rate, notes:String(r.notes || '') } }); success++; }
  const record = await prisma.excelImport.create({ data: { fileName:req.file.originalname, uploadedBy:req.user!.id, status: errors.length ? 'PARTIAL' : 'COMPLETED', totalRows:rows.length, successRows:success, errorRows:errors.length, errors: errors as object[] } });
  res.json({ import: record, previewColumns: Object.keys(rows[0] || {}), errors });
});
export default router;
