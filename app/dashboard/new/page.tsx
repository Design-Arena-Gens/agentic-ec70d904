"use client"
import { useState } from 'react'
import { Card } from '@/components/ui'

export default function NewCalcPage() {
  const [type, setType] = useState<'ongrid'|'offgrid'|'pump'>('ongrid')

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Nouveau calcul</h1>

      <div className="inline-flex rounded-md border bg-white p-1">
        <button className={`rounded px-3 py-1 ${type==='ongrid'?'bg-brand text-white':''}`} onClick={() => setType('ongrid')}>On-grid</button>
        <button className={`rounded px-3 py-1 ${type==='offgrid'?'bg-brand text-white':''}`} onClick={() => setType('offgrid')}>Off-grid</button>
        <button className={`rounded px-3 py-1 ${type==='pump'?'bg-brand text-white':''}`} onClick={() => setType('pump')}>Pompage</button>
      </div>

      {type === 'ongrid' && <OnGridForm />}
      {type === 'offgrid' && <OffGridForm />}
      {type === 'pump' && <PumpForm />}
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="mb-6">
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {children}
      </div>
    </Card>
  )
}

function Field({ label, suffix, ...props }: any) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block">{label}</span>
      <div className="flex items-center gap-2">
        <input className="w-full rounded-md border px-3 py-2" {...props} />
        {suffix && <span className="text-slate-600">{suffix}</span>}
      </div>
    </label>
  )
}

function Result({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-slate-50 p-3 text-sm">
      <div className="text-slate-500">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  )
}

function OnGridForm() {
  const [dailyConsumptionKwh, setDailyConsumptionKwh] = useState(10)
  const [specificYield, setSpecificYield] = useState(4.5) // kWh/kWp/jour
  const [perfRatio, setPerfRatio] = useState(0.8)

  const requiredPowerKwP = dailyConsumptionKwh / (specificYield * perfRatio)

  return (
    <div className="space-y-6">
      <Section title="Entrées">
        <Field label="Consommation quotidienne" type="number" step="0.1" value={dailyConsumptionKwh} onChange={(e: any) => setDailyConsumptionKwh(parseFloat(e.target.value))} suffix="kWh/jour" />
        <Field label="Productible spécifique" type="number" step="0.1" value={specificYield} onChange={(e: any) => setSpecificYield(parseFloat(e.target.value))} suffix="kWh/kWp/j" />
        <Field label="Performance ratio" type="number" step="0.01" value={perfRatio} onChange={(e: any) => setPerfRatio(parseFloat(e.target.value))} />
      </Section>
      <Section title="Résultats">
        <Result label="Puissance installée" value={`${requiredPowerKwP.toFixed(2)} kWp`} />
        <Result label="Nombre de panneaux (400W)" value={`${Math.ceil((requiredPowerKwP*1000)/400)}`} />
      </Section>
    </div>
  )
}

function OffGridForm() {
  const [dailyConsumptionKwh, setDailyConsumptionKwh] = useState(5)
  const [autonomyDays, setAutonomyDays] = useState(2)
  const [dod, setDod] = useState(0.8)
  const [systemVoltage, setSystemVoltage] = useState(24)

  const batteryCapacityAh = (dailyConsumptionKwh * 1000 * autonomyDays) / (systemVoltage * dod)

  return (
    <div className="space-y-6">
      <Section title="Entrées">
        <Field label="Consommation quotidienne" type="number" step="0.1" value={dailyConsumptionKwh} onChange={(e: any) => setDailyConsumptionKwh(parseFloat(e.target.value))} suffix="kWh/jour" />
        <Field label="Autonomie" type="number" step="1" value={autonomyDays} onChange={(e: any) => setAutonomyDays(parseFloat(e.target.value))} suffix="jours" />
        <Field label="Profondeur de décharge (DoD)" type="number" step="0.01" value={dod} onChange={(e: any) => setDod(parseFloat(e.target.value))} />
        <Field label="Tension système" type="number" step="1" value={systemVoltage} onChange={(e: any) => setSystemVoltage(parseFloat(e.target.value))} suffix="V" />
      </Section>
      <Section title="Résultats">
        <Result label="Capacité batterie requise" value={`${batteryCapacityAh.toFixed(0)} Ah`} />
      </Section>
    </div>
  )
}

function PumpForm() {
  const [flowM3h, setFlowM3h] = useState(10)
  const [headM, setHeadM] = useState(30)
  const [efficiency, setEfficiency] = useState(0.5)

  const rho = 1000 // kg/m3
  const g = 9.81 // m/s2
  const powerW = (rho * g * (flowM3h/3600) * headM) / efficiency

  return (
    <div className="space-y-6">
      <Section title="Entrées">
        <Field label="Débit" type="number" step="0.1" value={flowM3h} onChange={(e: any) => setFlowM3h(parseFloat(e.target.value))} suffix="m³/h" />
        <Field label="Hauteur manométrique" type="number" step="1" value={headM} onChange={(e: any) => setHeadM(parseFloat(e.target.value))} suffix="m" />
        <Field label="Rendement global" type="number" step="0.01" value={efficiency} onChange={(e: any) => setEfficiency(parseFloat(e.target.value))} />
      </Section>
      <Section title="Résultats">
        <Result label="Puissance pompe estimée" value={`${(powerW/1000).toFixed(2)} kW`} />
      </Section>
    </div>
  )
}
