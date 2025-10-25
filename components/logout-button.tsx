"use client"
import { useRouter } from 'next/navigation'

export function LogoutButton() {
  const router = useRouter()
  return (
    <button
      onClick={async () => {
        await fetch('/api/auth/logout', { method: 'POST' })
        router.push('/auth')
      }}
      className="block w-full rounded px-3 py-2 text-left text-red-600 hover:bg-red-50"
    >
      Déconnexion
    </button>
  )
}
