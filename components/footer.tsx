import { Container } from './ui'

export function Footer() {
  return (
    <footer className="mt-20 border-t bg-white">
      <Container className="grid gap-8 py-10 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand text-white">GE</span>
            Green Energy
          </div>
          <p className="text-sm text-slate-600">Optimisez vos projets solaires facilement.</p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Liens</h4>
          <ul className="space-y-2 text-slate-700">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#why" className="hover:underline">Pourquoi nous</a></li>
            <li><a href="/auth" className="hover:underline">Connexion</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Contact</h4>
          <ul className="space-y-2 text-slate-700">
            <li>contact@greenenergy.app</li>
            <li>Mentions légales</li>
            <li className="flex gap-3">
              <a className="hover:underline" href="#">Twitter</a>
              <a className="hover:underline" href="#">LinkedIn</a>
              <a className="hover:underline" href="#">YouTube</a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t py-4 text-center text-sm text-slate-500">© {new Date().getFullYear()} Green Energy</div>
    </footer>
  )
}
