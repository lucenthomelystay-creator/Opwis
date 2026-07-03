import bcrypt from 'bcryptjs'; import { prisma } from '../src/config/prisma.js';
const password = await bcrypt.hash('admin123', 12);
await prisma.user.upsert({ where:{ phone:'+10000000000' }, update:{}, create:{ phone:'+10000000000', password, role:'ADMINISTRATOR' } });
console.log('Seeded admin +10000000000 / admin123'); await prisma.$disconnect();
