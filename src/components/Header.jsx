import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const navLink = ({ isActive }) =>
    `px-4 py-2 rounded-full transition-colors ${isActive ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'}`

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400" />
            <span className="font-semibold tracking-tight text-gray-900">Jorge Portfolio</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLink}>Home</NavLink>
            <NavLink to="/about" className={navLink}>About</NavLink>
            <NavLink to="/contact" className={navLink}>Contact</NavLink>
          </nav>

          <button className="md:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              <NavLink onClick={() => setOpen(false)} to="/" className={navLink}>Home</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/about" className={navLink}>About</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/contact" className={navLink}>Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
