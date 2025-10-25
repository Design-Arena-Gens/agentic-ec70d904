import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button, Card, Container } from '@/components/ui'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="gradient-hero border-b bg-white">
          <Container className="grid items-center gap-10 py-24 md:grid-cols-2">
            <div className="space-y-6 fade-in">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Optimisez vos projets solaires facilement.</h1>
              <p className="text-lg text-slate-700">Calculs On-grid, Off-grid et Pompage solaire — le tout au même endroit avec des outils simples et fiables.</p>
              <div className="flex gap-4">
                <Link href="/auth"><Button>Créer une note de calcul</Button></Link>
                <a href="#services" className="inline-flex items-center text-brand hover:underline">Découvrir nos services</a>
              </div>
              <div className="flex items-center gap-6 pt-4 text-sm text-slate-600">
                <span>Fiabilité</span>
                <span>Économie</span>
                <span>Durabilité</span>
              </div>
            </div>
            <div className="relative h-80 md:h-[28rem] fade-in" style={{animationDelay:'120ms'}}>
              <Image src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop" alt="Panneaux solaires" fill className="rounded-xl object-cover shadow-soft" />
            </div>
          </Container>
        </section>

        <section id="services" className="bg-white py-20">
          <Container>
            <h2 className="mb-10 text-3xl font-semibold">Nos services</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <h3 className="mb-2 text-xl font-semibold">Calcul On-grid</h3>
                <p className="mb-4 text-slate-700">Dimensionnez vos systèmes raccordés au réseau avec précision.</p>
                <Link className="text-brand hover:underline" href="/dashboard/new">Commencer</Link>
              </Card>
              <Card>
                <h3 className="mb-2 text-xl font-semibold">Calcul Off-grid</h3>
                <p className="mb-4 text-slate-700">Concevez des systèmes autonomes pour sites isolés.</p>
                <Link className="text-brand hover:underline" href="/dashboard/new">Commencer</Link>
              </Card>
              <Card>
                <h3 className="mb-2 text-xl font-semibold">Pompage solaire</h3>
                <p className="mb-4 text-slate-700">Calculez les besoins énergétiques pour le pompage.</p>
                <Link className="text-brand hover:underline" href="/dashboard/new">Commencer</Link>
              </Card>
            </div>
          </Container>
        </section>

        <section id="why" className="bg-slate-50 py-20">
          <Container>
            <h2 className="mb-10 text-3xl font-semibold">Pourquoi nous choisir</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>Économie: optimisez vos coûts avec des recommandations précises.</Card>
              <Card>Fiabilité: des calculs basés sur les meilleures pratiques.</Card>
              <Card>Durabilité: concevez des systèmes performants et responsables.</Card>
            </div>
          </Container>
        </section>

        <section className="bg-white py-20">
          <Container>
            <h2 className="mb-10 text-3xl font-semibold">Témoignages / partenaires</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>“Outil très clair et efficace.” — A.</Card>
              <Card>“Nous gagnons du temps sur chaque projet.” — B.</Card>
              <Card>“Support réactif et pro.” — C.</Card>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  )
}
