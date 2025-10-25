import { Card } from '@/components/ui'

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Bienvenue</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <h3 className="mb-1 font-semibold">On-grid</h3>
          <p className="text-slate-600">Dimensionnement réseau</p>
        </Card>
        <Card>
          <h3 className="mb-1 font-semibold">Off-grid</h3>
          <p className="text-slate-600">Autonome</p>
        </Card>
        <Card>
          <h3 className="mb-1 font-semibold">Pompage</h3>
          <p className="text-slate-600">Calcul pompage solaire</p>
        </Card>
      </div>
    </div>
  )
}
