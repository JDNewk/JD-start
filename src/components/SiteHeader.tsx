import { Link } from '@tanstack/react-router'
import { business } from '@/lib/site'

const navLinks = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#area', label: 'Service Area' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-zinc-900 text-white text-center text-sm font-medium py-2 px-4">
        ⚡ Limited totes available each week in the Quad Cities — reserve early.
      </div>
      <header className="bg-white/95 backdrop-blur border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-red-700 text-white font-bold">
              QC
            </span>
            <span className="font-bold text-lg text-zinc-900">
              {business.name}
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-red-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#book"
            className="rounded-full bg-red-700 text-white text-sm font-semibold px-5 py-2.5 hover:bg-red-800 transition-colors whitespace-nowrap"
          >
            Reserve Now
          </a>
        </div>
      </header>
    </div>
  )
}
