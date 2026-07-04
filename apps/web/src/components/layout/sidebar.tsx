import { Link } from '@tanstack/react-router'
import { BarChart3, Bell, FileSpreadsheet, Home, Landmark, LogOut, Settings, Users, WalletCards } from 'lucide-react'
const items = [
  ['Dashboard','/admin',Home],['Investors','/admin/investors',Users],['Interest Management','/admin/interest',WalletCards],['Transactions','/admin/transactions',Landmark],['Excel Upload','/admin/excel-upload',FileSpreadsheet],['Notifications','/admin',Bell],['Reports','/admin/reports',BarChart3],['Settings','/admin/settings',Settings],['Logout','/login',LogOut]
] as const
export function Sidebar() { return <aside className="hidden h-screen w-72 border-r bg-white/80 p-5 backdrop-blur-xl dark:bg-slate-950/80 lg:block"><Link to="/" className="mb-8 block text-2xl font-bold text-primary">Optionwise</Link><nav className="space-y-2">{items.map(([label,to,Icon])=><Link key={label} to={to} className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-primary dark:text-slate-300 dark:hover:bg-slate-900"><Icon size={18}/>{label}</Link>)}</nav></aside> }
