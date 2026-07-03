import './globals.css'; import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Optionwise', description: 'Premium investor management platform' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
