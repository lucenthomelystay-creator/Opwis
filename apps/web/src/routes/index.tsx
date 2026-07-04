import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

export const Route = createFileRoute('/')({ component: HomePage })

const highlights = ['Excel import with column mapping', 'Role-based admin and investor portals', 'Ledger, interest, capital and withdrawal workflows']

function HomePage() {
  return <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#DBEAFE,transparent_35%),#F8FAFC] p-6">
    <section className="mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center gap-10 py-10">
      <nav className="flex items-center justify-between"><div className="flex items-center gap-3"><div className="grid size-12 place-items-center rounded-2xl bg-primary font-bold text-white shadow-lg shadow-blue-900/25">O</div><span className="text-xl font-bold">Optionwise</span></div><Link to="/login" className="rounded-2xl bg-primary px-5 py-3 font-semibold text-white">Sign in</Link></nav>
      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>
          <p className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-secondary">TanStack Start + React + TypeScript</p>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-950 md:text-7xl">Replace Excel with a premium investor command center.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Manage capital, monthly interest, withdrawals, notifications and reports from a fast Vite-powered TanStack Start application.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link to="/admin" className="rounded-2xl bg-primary px-6 py-4 font-semibold text-white shadow-xl shadow-blue-900/20">Open admin dashboard</Link><Link to="/investor" className="rounded-2xl border border-slate-200 bg-white px-6 py-4 font-semibold">Investor portal</Link></div>
        </motion.div>
        <Card className="p-4"><div className="rounded-[24px] bg-slate-950 p-5 text-white"><p className="text-sm text-blue-200">Net Portfolio</p><p className="mt-3 text-5xl font-black">₹ 9.42 Cr</p><div className="mt-6 grid gap-3">{highlights.map((x) => <div key={x} className="rounded-2xl bg-white/10 p-4 text-sm">{x}</div>)}</div></div></Card>
      </div>
    </section>
  </main>
}
