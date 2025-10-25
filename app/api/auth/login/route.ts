import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}))
  const email = body.email as string | undefined
  const password = body.password as string | undefined

  if (!email || !password) {
    return NextResponse.json({ error: 'Email et mot de passe requis' }, { status: 400 })
  }

  // Demo: accept any credentials
  const res = NextResponse.json({ ok: true })
  res.cookies.set('ge_session', Buffer.from(JSON.stringify({ email })).toString('base64'), {
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secure: true,
    maxAge: 60 * 60 * 24 * 7,
  })
  return res
}
