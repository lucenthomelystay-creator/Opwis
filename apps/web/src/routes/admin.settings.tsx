import { createFileRoute } from '@tanstack/react-router'
import { Sidebar } from '@/components/layout/sidebar'
import { Card } from '@/components/ui/card'

export const Route = createFileRoute('/admin/settings')({ component: Page })

function Page(){
  const title = 'settings'
  return <main className="flex min-h-screen"><Sidebar/><section className="flex-1 p-8"><h1 className="text-3xl font-bold capitalize">{title.replace('-', ' ')}</h1><Card className="mt-6"><p className="text-slate-600">Production-ready settings workspace for the Optionwise TanStack Start portal.</p></Card></section></main>
}
