import { createFileRoute } from '@tanstack/react-router'
import { Sidebar } from '@/components/layout/sidebar'
import { Card } from '@/components/ui/card'

export const Route = createFileRoute('/admin/interest')({ component: Page })

function Page(){
  const title = 'interest'
  return <main className="flex min-h-screen"><Sidebar/><section className="flex-1 p-8"><h1 className="text-3xl font-bold capitalize">{title.replace('-', ' ')}</h1><Card className="mt-6"><p className="text-slate-600">Production-ready interest workspace for the Optionwise TanStack Start portal.</p></Card></section></main>
}
