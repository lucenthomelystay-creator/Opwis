import { calculateInterest, sanitizePhone } from './finance.js';
if (calculateInterest(120000, 12) !== 1200) throw new Error('interest calculation failed');
if (sanitizePhone('(555) 123-0000') !== '5551230000') throw new Error('phone sanitizer failed');
console.log('self-test passed');
