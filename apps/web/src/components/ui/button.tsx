import type { ButtonHTMLAttributes } from 'react'
export function Button({ className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`rounded-2xl bg-primary px-5 py-3 font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 ${className}`} {...props} />
}
