import { packages } from '@/lib/site'

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-center text-zinc-900">
          Pick Your Stack
        </h2>
        <p className="mt-3 text-center text-zinc-600 max-w-2xl mx-auto">
          Every package includes lids and dollies. Need something in
          between?{' '}
          <a href="#contact" className="text-red-700 font-semibold underline">
            Ask about a custom package.
          </a>
        </p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl border p-6 flex flex-col ${
                pkg.popular
                  ? 'border-red-600 bg-white shadow-lg'
                  : 'border-zinc-200 bg-white'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-red-700 text-white text-xs font-semibold px-3 py-1">
                  Most Popular
                </span>
              )}
              <h3 className="font-bold text-lg text-zinc-900">
                {pkg.name}
              </h3>
              <div className="mt-2 text-3xl font-extrabold text-zinc-900">
                ${pkg.price}
              </div>
              <p className="text-sm text-zinc-500 mt-1">
                {pkg.totes} totes &middot; {pkg.dollies}{' '}
                {pkg.dollies === 1 ? 'dolly' : 'dollies'} included
              </p>
              <p className="mt-4 text-sm text-zinc-600 flex-1">
                Best for {pkg.bestFor.toLowerCase()}.
              </p>
              <a
                href="#book"
                className="mt-5 rounded-full border border-red-700 text-red-700 font-semibold text-sm text-center px-4 py-2.5 hover:bg-red-700 hover:text-white transition-colors"
              >
                Reserve This Stack
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-zinc-500">
          Prices shown are starting rates for the free-delivery zone. Delivery
          fees for outlying areas, if any, are confirmed before you reserve.
        </p>
      </div>
    </section>
  )
}
