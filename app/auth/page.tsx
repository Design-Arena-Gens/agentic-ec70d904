"use client"
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Container, Card, Button } from '@/components/ui'

export default function AuthPage() {
  const [mode, setMode] = useState<'signin'|'signup'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white">
      <Container className="flex items-center justify-center py-20">
        <Card className="w-full max-w-md p-8">
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand text-white">GE</span>
            <span className="text-xl font-semibold">Green Energy</span>
          </div>

          <div className="mb-6 flex justify-center gap-4">
            <button className={`rounded px-3 py-1 ${mode==='signin'?'bg-brand text-white':'bg-slate-100'}`} onClick={() => setMode('signin')}>Se connecter</button>
            <button className={`rounded px-3 py-1 ${mode==='signup'?'bg-brand text-white':'bg-slate-100'}`} onClick={() => setMode('signup')}>Créer un compte</button>
          </div>

          <form className="space-y-4" onSubmit={async (e) => {
            e.preventDefault()
            setError(null)
            if (mode === 'signup' && password !== confirm) {
              setError('Les mots de passe ne correspondent pas')
              return
            }
            setLoading(true)
            try {
              const res = await fetch(`/api/auth/${mode === 'signin' ? 'login' : 'signup'}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
              })
              if (!res.ok) {
                const data = await res.json().catch(() => ({}))
                throw new Error(data.error || 'Erreur de connexion')
              }
              router.push('/dashboard')
            } catch (err: any) {
              setError(err.message)
            } finally {
              setLoading(false)
            }
          }}>
            <div>
              <label className="mb-1 block text-sm">Email</label>
              <input className="w-full rounded-md border px-3 py-2" type="email" required placeholder="you@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
              <label className="mb-1 block text-sm">Mot de passe</label>
              <input className="w-full rounded-md border px-3 py-2" type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            {mode === 'signup' && (
              <div>
                <label className="mb-1 block text-sm">Confirmer le mot de passe</label>
                <input className="w-full rounded-md border px-3 py-2" type="password" required value={confirm} onChange={(e)=>setConfirm(e.target.value)} />
              </div>
            )}
            <div className="flex items-center justify-between text-sm">
              <Link href="#" className="text-brand hover:underline">Mot de passe oublié ?</Link>
            </div>
            {error && <div className="rounded-md bg-red-50 p-3 text-sm text-red-700">{error}</div>}
            <Button className="w-full" aria-busy={loading as any}>{loading ? 'Veuillez patienter…' : (mode==='signin'?'Se connecter':'Créer un compte')}</Button>
            <button type="button" className="w-full rounded-md border bg-white px-5 py-3 transition hover:bg-slate-50">Continuer avec Google</button>
          </form>
        </Card>
      </Container>
    </div>
  )
}
