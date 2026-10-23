import { business } from '@/lib/site'

const quickLinks = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#area', label: 'Service Area' },
  { href: '#contact', label: 'Contact' },
]

export function SiteFooter() {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="max-w-6xl mx-auto px-5 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-red-700 text-white font-bold text-sm">
              QC
            </span>
            <span className="font-bold text-white">{business.name}</span>
          </div>
          <p className="mt-3 text-sm text-zinc-400 max-w-xs">
            {business.tagline} Serving the Illinois &amp; Iowa Quad Cities.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3 text-sm">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3 text-sm">Contact</h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>{business.phone}</li>
            <li>{business.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-800 py-6 text-center text-xs text-zinc-500">
        &copy; {new Date().getFullYear()} {business.name}. All rights
        reserved.
      </div>
    </footer>
  )
}
