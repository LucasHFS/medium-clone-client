import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function Header() {
  const router = useRouter()
  const currentRoute = router.route

  const isActive = (route: string) => {
    return route === currentRoute
  }
  return (
    <nav className="py-2 px-6 container mx-auto">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-primary font-bold text-lg">medium</Link>
        <ul className="flex gap-4 py-2 text-sm ">
          <li className={`${isActive("/") ? "": "text-slate-400 hover:text-slate-600"}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${isActive("/login") ? "": "text-slate-400 hover:text-slate-600"}`}>
            <Link href="/login">Sign In</Link>
          </li>
          <li className={`${isActive("/register") ? "": "text-slate-400 hover:text-slate-600"}`}>
            <Link href="/register">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
