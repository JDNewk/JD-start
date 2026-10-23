const useCases = [
  'Moving',
  'Decluttering',
  'Home renovations',
  'Yard & garage projects',
  'Back-to-school moves',
  'Corporate relocations',
  'College move-in / move-out',
  'Realtor closing gifts',
]

export function WhoItsFor() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-center text-zinc-900">
          Who It's For
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {useCases.map((useCase) => (
            <div
              key={useCase}
              className="rounded-xl border border-zinc-200 p-5 text-center font-medium text-zinc-700"
            >
              {useCase}
            </div>
          ))}
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-red-50 p-6">
            <h3 className="font-bold text-zinc-900 mb-1">
              Military &amp; first responder discount
            </h3>
            <p className="text-sm text-zinc-600">
              Active duty, veterans, and first responders get a discount on
              any package. Mention it when you reserve and we'll adjust the
              total before you pay.
            </p>
          </div>
          <div className="rounded-2xl bg-red-50 p-6">
            <h3 className="font-bold text-zinc-900 mb-1">
              Realtor &amp; property manager discount
            </h3>
            <p className="text-sm text-zinc-600">
              Booking totes for clients or turnovers? Ask about standing
              discounts for realtors and property managers across the Quad
              Cities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
