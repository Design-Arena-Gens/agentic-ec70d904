import Link from 'next/link'
import { Button, Container } from './ui'

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-white/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand text-white">GE</span>
          <span>Green Energy</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link href="/" className="text-slate-700 hover:text-slate-900">Accueil</Link>
          <a href="#services" className="text-slate-700 hover:text-slate-900">Services</a>
          <a href="#why" className="text-slate-700 hover:text-slate-900">Pourquoi nous</a>
          <Link href="/auth" className="text-slate-700 hover:text-slate-900">Connexion</Link>
          <Link href="/dashboard" className="text-slate-700 hover:text-slate-900">Tableau de bord</Link>
        </nav>
        <Link href="/auth"><Button>Créer une note de calcul</Button></Link>
      </Container>
    </header>
  )
}
