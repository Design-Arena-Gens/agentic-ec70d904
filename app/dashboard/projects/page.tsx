import { Card } from '@/components/ui'

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Mes projets</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Projet Démo</h3>
              <p className="text-sm text-slate-600">On-grid · 3 kWc</p>
            </div>
            <button className="rounded-md border px-3 py-1 text-sm">Ouvrir</button>
          </div>
        </Card>
      </div>
    </div>
  )
}
