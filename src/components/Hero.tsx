import { business, packages } from '@/lib/site'

const popular = packages.find((p) => p.popular)!

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-50">
      <div className="max-w-6xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-red-700 font-semibold text-sm uppercase tracking-wide mb-3">
            Serving the Illinois &amp; Iowa Quad Cities
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-zinc-900">
            WE DROP OFF.
            <br />
            YOU PACK.
            <br />
            WE PICK UP.
          </h1>
          <p className="mt-5 text-lg text-zinc-600 max-w-xl">
            {business.name} delivers sturdy, stackable moving totes right to
            your door in Davenport, Bettendorf, Rock Island, Moline, and
            everywhere in between. Pack on your own schedule — no tape, no
            broken boxes, no late-night scrambling.
          </p>
          <p className="mt-3 text-sm text-zinc-500 max-w-xl">
            We're a tote rental service, not a moving company — we don't lift
            or carry your belongings.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              className="rounded-full bg-red-700 text-white font-semibold px-7 py-3.5 hover:bg-red-800 transition-colors"
            >
              Reserve Your Totes
            </a>
            <a
              href="#pricing"
              className="rounded-full border border-zinc-300 text-zinc-700 font-semibold px-7 py-3.5 hover:border-red-400 hover:text-red-700 transition-colors"
            >
              See Pricing
            </a>
          </div>
          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-white border border-zinc-200 px-5 py-3">
            <span className="text-2xl font-extrabold text-red-700">
              ${popular.price}
            </span>
            <span className="text-sm text-zinc-600">
              Most popular: {popular.totes} totes, free delivery inside the
              Quad Cities core.
            </span>
          </div>
          <p className="mt-3 text-xs text-zinc-500">
            Military, first responder, and realtor discounts available —
            just ask.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/.netlify/images?url=/img/hero.png&w=1200&fm=webp&q=80"
              alt="Stacked moving totes and a hand dolly beside a delivery van"
              className="w-full h-full object-cover object-right"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
