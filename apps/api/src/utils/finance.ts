export function calculateInterest(capital: number, annualRate: number, mode: 'simple' | 'compound' = 'simple') {
  const monthly = capital * (annualRate / 100) / 12;
  return Number((mode === 'compound' ? monthly : monthly).toFixed(2));
}
export function sanitizePhone(phone: string) { return phone.replace(/[^0-9+]/g, ''); }
