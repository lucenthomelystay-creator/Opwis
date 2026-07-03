import type { Config } from 'tailwindcss';
export default { darkMode:'class', content:['./src/**/*.{ts,tsx}'], theme:{ extend:{ colors:{ primary:'#1E3A8A', secondary:'#2563EB', success:'#16A34A', warning:'#F59E0B', danger:'#DC2626', background:'#F8FAFC' }, borderRadius:{ card:'20px' }, boxShadow:{ premium:'0 24px 80px rgba(15,23,42,.10)' } } }, plugins:[] } satisfies Config;
