"use client"
import { ReactNode, useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return <>{children}</>
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </NextThemesProvider>
  )
}
