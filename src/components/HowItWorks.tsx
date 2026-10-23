const steps = [
  {
    number: '01',
    title: 'We deliver your totes',
    description:
      'Pick a delivery day and window. We drop off your totes, lids, and dollies right at your door — already clean and ready to fill.',
  },
  {
    number: '02',
    title: 'You pack on a flexible two-week cycle',
    description:
      'Fill the totes at your own pace. Most rentals run two weeks, and extensions are easy to add if you need more time.',
  },
  {
    number: '03',
    title: 'We pick up the empties',
    description:
      'Once you have unpacked at your new place, schedule a pickup and we collect every tote — no boxes to break down or haul to recycling.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-center text-zinc-900">
          How It Works
        </h2>
        <p className="mt-3 text-center text-zinc-600 max-w-2xl mx-auto">
          Three simple steps, built around a flexible two-week packing
          window.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-zinc-200 p-6"
            >
              <div className="text-red-700 font-extrabold text-3xl mb-3">
                {step.number}
              </div>
              <h3 className="font-bold text-lg text-zinc-900 mb-2">
                {step.title}
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
