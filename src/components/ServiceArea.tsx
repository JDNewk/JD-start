import { feeZoneCities, freeZoneCities } from '@/lib/site'

export function ServiceArea() {
  return (
    <section id="area" className="py-20 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-center text-zinc-900">
          Service Area
        </h2>
        <p className="mt-3 text-center text-zinc-600 max-w-2xl mx-auto">
          We serve the Illinois &amp; Iowa Quad Cities and the surrounding
          communities on both sides of the Mississippi.
        </p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <h3 className="font-bold text-red-900 mb-3">
              🟢 Free delivery &amp; pickup
            </h3>
            <ul className="space-y-1.5 text-sm text-red-900">
              {freeZoneCities.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-300 bg-zinc-100 p-6">
            <h3 className="font-bold text-zinc-800 mb-3">
              🟡 Fee applies
            </h3>
            <ul className="space-y-1.5 text-sm text-zinc-800">
              {feeZoneCities.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-zinc-500">
          Outside these areas? A $15 fee applies per leg (delivery or
          pickup) outside the free zone, or $30 if both stops are outside it.
          Not seeing your town — ask us, we may still be able to reach you.
        </p>
      </div>
    </section>
  )
}
