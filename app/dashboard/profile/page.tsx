"use client"
import { useState } from 'react'
import { Card } from '@/components/ui'

export default function ProfilePage() {
  const [name, setName] = useState('Utilisateur')
  const [company, setCompany] = useState('Green Co')

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Profil</h1>
      <Card>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm">
            <span className="mb-1 block">Nom</span>
            <input className="w-full rounded-md border px-3 py-2" value={name} onChange={e=>setName(e.target.value)} />
          </label>
          <label className="text-sm">
            <span className="mb-1 block">Société</span>
            <input className="w-full rounded-md border px-3 py-2" value={company} onChange={e=>setCompany(e.target.value)} />
          </label>
        </div>
        <div className="mt-4">
          <button className="rounded-md bg-brand px-4 py-2 text-white">Enregistrer</button>
        </div>
      </Card>
    </div>
  )
}
