import Link from 'next/link'
import { Container } from '@/components/ui'
import { LogoutButton } from '@/components/logout-button'

export function Sidebar() {
  return (
    <aside className="sticky top-16 h-[calc(100vh-4rem)] w-64 border-r bg-white p-4">
      <nav className="space-y-2">
        <Link href="/dashboard" className="block rounded px-3 py-2 hover:bg-slate-100">Accueil</Link>
        <Link href="/dashboard/projects" className="block rounded px-3 py-2 hover:bg-slate-100">Mes projets</Link>
        <Link href="/dashboard/new" className="block rounded px-3 py-2 hover:bg-slate-100">Nouveau calcul</Link>
        <Link href="/dashboard/profile" className="block rounded px-3 py-2 hover:bg-slate-100">Profil</Link>
        <LogoutButton />
      </nav>
    </aside>
  )
}
