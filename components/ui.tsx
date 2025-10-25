import { HTMLAttributes } from 'react'
import clsx from 'clsx'

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('container-padding mx-auto w-full max-w-7xl', className)} {...props} />
}

export function Button({ className, ...props }: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-md bg-brand px-5 py-3 text-white shadow-soft transition hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand/40',
        className
      )}
      {...props}
    />
  )
}

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        'rounded-xl border border-slate-200 bg-white p-6 shadow-soft transition hover:shadow-lg',
        className
      )}
      {...props}
    />
  )
}
